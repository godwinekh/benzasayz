import { useEffect, useReducer, useState } from "react";
import { db, storage } from "../firebase-config.js";
import ActionsContext from "./actions-context";
import { ref, push, child, set, onValue, update, remove } from "firebase/database";
import { ref as storageBucketRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Helper constant for formatting date input
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Default state for the Upload component
const defaultState = {
  movies: [],
  showInfo: null,
  activeMovie: null,
  isEditing: null,
  status: { pending: "", message: "" },
};

// Reducer function to dispatch actions
const movieReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      movies: state.movies,
      showInfo: false,
      activeMovie: state.activeMovie,
      isEditing: false,
      status: state.status,
    };
  }

  if (action.type === "ACTIVE") {
    return {
      movies: state.movies,
      showInfo: true,
      activeMovie: action.item,
      isEditing: false,
      status: state.status,
    };
  }

  if (action.type === "EDITING") {
    return {
      movies: state.movies,
      showInfo: false,
      activeMovie: state.activeMovie,
      isEditing: true,
      status: state.status,
    };
  }

  if (action.type === "LOAD") {
    const data = action.item;
    const movieItems = [];
    for (const key in data) {
      movieItems.push({
        key: key,
        ...data[key],
      });
    }

    return {
      movies: movieItems,
      showInfo: state.showInfo,
      activeMovie: state.activeMovie,
      isEditing: state.isEditing,
      status: state.status,
    };
  }

  if (action.type === "QUERIED") {
    const keywords = action.item.keywords;
    let queriedMovies;

    if (keywords) {
      queriedMovies = state.movies.filter((movie) =>
        movie.title?.includes(keywords)
      );
    } else {
      const data = action.item.snapshot;
      const movieItems = [];
      for (const key in data) {
        movieItems.push({
          key: key,
          ...data[key],
        });
      }
      queriedMovies = movieItems;
    }

    return {
      movies: queriedMovies,
      showInfo: state.showInfo,
      activeMovie: state.activeMovie,
      isEditing: state.isEditing,
      status: state.status,
    };
  }

  // all status action for UI feedback
  if (action.type === "PENDING") {
    const newStatus = {...state.status, pending: true}
    return {
      movies: state.movies,
      showInfo: state.showInfo,
      activeMovie: state.activeMovie,
      isEditing: state.isEditing,
      status: newStatus,
    }
  }
  if (action.type === "COMPLETED") {
    const newStatus = {pending: false, message: action.message }
    return {
      movies: state.movies,
      showInfo: state.showInfo,
      activeMovie: state.activeMovie,
      isEditing: state.isEditing,
      status: newStatus,
    }
  }

  return defaultState;
};

// Provider component for the ActionContext
const ActionsProvider = (props) => {
  const [state, dispatch] = useReducer(movieReducer, defaultState);
  const [moviesSnapshot, setMoviesSnapshot] = useState();
  // manage state for holding new movies till upload is complete and retrieving url from firebase storage once upload is done
  const [newKey, setNewKey] = useState();
  const [url, setUrl] = useState({imageLsc: '', imagePrt: ''});

  
  // Retrieve all movie reference from firebase database
  useEffect(() => {    
    const extractedMovies = ref(db, "/movies");
    onValue(extractedMovies, (snapshot) => {
      const data = snapshot.val();
      dispatch({ type: "LOAD", item: data });
      setMoviesSnapshot(data);
    });
  }, []);
  
  // Tigger addition of movie data to realtime database after image upload to storage is successful
  useEffect(() => {
    if (url.imageLsc !== '' && url.imagePrt !== '') {
      const updates = {};
      const imageUrl = {imageLsc: url.imageLsc, imagePrt: url.imagePrt};
      updates[`movies/${newKey}/imageUrl`] = imageUrl;

      update(ref(db), updates);
    }
  }, [url, newKey]);

  // Dispatch an action to filter movies based on keyword on every entry
  const findMovieItem = (keywords) => {
    dispatch({ type: "QUERIED", item: {keywords:keywords, snapshot:moviesSnapshot} });
  };

  // Save the active movie in state to retrieve for easy editing
  const activeMovieItem = (movie) => {
    dispatch({ type: "ACTIVE", item: movie });
  };

  const showFormHandler = (action) => {
    if (action === 'add') {
      dispatch({ type: "ADD" });
    };
    if (action === 'edit') {
      dispatch({ type: "EDITING" });
    };
    console.log("Edit button is working");
  };

  const uploadNewMovieHandler = async (movie) => {
    dispatch({type: "PENDING"});
    if (Object.hasOwn(movie, 'id')) {
      dispatch({type: "COMPLETED", message: `Warning: ${movie.title} is already in the database.`});
      return;
    };

    // if movie is updating, use existing movie id to overwrite previous images else create a new movie id.
    const totalIndex = moviesSnapshot ? Object.keys(moviesSnapshot).length : 0;
    const newIndex = totalIndex + 1;
    const id = `m${newIndex}`;
    // setNewMovie({id:id, ...movie});

    //processing image upload first: create a reference to firebase storage
    const storageRef = storageBucketRef(storage);
    //access the images node and create a new node for the movie
    const imagesRef = storageBucketRef(storageRef, `images/${id}`);
    
    // create a file ref for each image with the file name retrieved from the original image
    const portraitImageRef = storageBucketRef(imagesRef, movie['image-prt'][0].name);
    const landscapeImageRef = storageBucketRef(imagesRef, movie['image-lsc'][0].name);

    // upload the portrait image first 
    const uploadTaskPrt = uploadBytesResumable(portraitImageRef, movie['image-prt'][0]);
    uploadTaskPrt.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        // Handle unsuccessful uploads
        console.log(error.message);
      }, 
      async () => {
        // Handle successful uploads on complete
        await getDownloadURL(uploadTaskPrt.snapshot.ref).then((downloadURL) => { setUrl(prevUrlState => { return { ...prevUrlState, imagePrt: downloadURL}}) });
      }//Successful func. for portrait upload.
    );

    // upload the landscape image when the portrait upload is done and returns true.
    const uploadTaskLsc = uploadBytesResumable(landscapeImageRef, movie['image-lsc'][0]);
    uploadTaskLsc.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        // Handle unsuccessful uploads
        console.log(error.message);
      }, 
      async () => {
        // Handle successful uploads on complete
        await getDownloadURL(uploadTaskLsc.snapshot.ref).then((downloadURL) => { setUrl(prevUrlState => { return { ...prevUrlState, imageLsc: downloadURL}}) });
      }
    );
    
    if (await uploadTaskPrt && await uploadTaskLsc) {
      console.log('this block executes')
      return {id:id, ...movie};      
    }
  };

  const addMovieItem = async (movie) => {
    const item = await uploadNewMovieHandler(movie);

    // formatting date for storage
    const date = new Date(item['release-date']);
    let month = months[date.getMonth()];
    const formattedDate = `${month} ${date.getDate()}, ${date.getFullYear()}`;

    //formatting data for database
    const transformData = {
      id: item.id,
      title: item.title,
      synopsis: item.synopsis,
      releaseDate: formattedDate,
      rating: item.rating,
      cast: item.cast,
      genre: item.genre,
      trailer: item.trailer,
      download: item.download,
      review: item.review,
      tags: item.tags,
      imageUrl: {imageLsc: url.imageLsc, imagePrt: url.imagePrt},
    };
    
    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'posts')).key;

    // send data to db and watch for changes
    set(ref(db, "movies/" + newPostKey), {
      ...transformData
    })
      .then(() => {
        const response = "Success: Movie upload has been saved in the database!";
        dispatch({ type: "COMPLETED", message: response });
        console.log("Data saved successfully!");
      })
      .catch((error) => {
        const response = "Failed: The movie did not upload because " + error;
        dispatch({ type: "COMPLETED", message: response });
        console.log("The write failed because " + error);
      });
    
    setNewKey(newPostKey);
  };

  const updateMovieItem = (movie) => {
    dispatch({type: "PENDING"});
    const updates = {};

    // formatting date for storage
    const date = new Date(movie['release-date']);
    let month = months[date.getMonth()];
    const formattedDate = `${month} ${date.getDate()}, ${date.getFullYear()}`;

    const stripObjectKey = {
      id: movie.id,
      title: movie.title,
      synopsis: movie.synopsis,
      releaseDate: formattedDate,
      rating: movie.rating,
      cast: movie.cast,
      genre: movie.genre,
      trailer: movie.trailer,
      download: movie.download,
      review: movie.review,
      tags: movie.tags,
      imageUrl: state.activeMovie.imageUrl
    };
    updates[`movies/${state.activeMovie.key}`] = stripObjectKey;

    update(ref(db), updates)
      .then(() => {
        const response = `Success: ${movie.title} has been updated!`;
        dispatch({ type: "COMPLETED", message: response });
      })
      .catch((error) => {
        const response = `Failed: ${movie.title} did not update due to ${error}.`;
        dispatch({ type: "COMPLETED", message: response });
      });
  };

  const removeMovieItem = () => {
    const title = state.activeMovie.title;

    remove(ref(db, `movies/${state.activeMovie.key}`))
      .then(() => {
        const response = `Success: ${title} has been removed from database!`;
        dispatch({ type: "COMPLETED", message: response });
      })
      .catch((error) => {
        const response = `Failed: ${title} was not removed due to ${error}. Please try again!`;
        dispatch({ type: "COMPLETED", message: response });
      });
  };

  // This constant holds current values for all state and handler functions to dispatch actions.
  const actionsContext = {
    movies: state.movies,
    showInfo: state.showInfo,
    activeMovie: state.activeMovie,
    isEditing: state.isEditing,
    status: state.status,
    showForm: showFormHandler,
    findMovie: findMovieItem,
    getActiveMovie: activeMovieItem,
    addMovie: addMovieItem,
    updateMovie: updateMovieItem,
    removeMovie: removeMovieItem,
  };

  return (
    <ActionsContext.Provider value={actionsContext}>
      {props.children}
    </ActionsContext.Provider>
  );
};

export default ActionsProvider;
