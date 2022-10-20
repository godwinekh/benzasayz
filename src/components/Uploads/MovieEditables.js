import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {db, storage} from "../../firebase-config";
import { ref, push, child } from "firebase/database"
import { ref as storageBucketRef, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import MovieDataForm from "./MovieDataForm";
import MovieInfo from "./MovieInfo";
import { consoleActions } from "../../store/console/actions-slice";
import Notification from "./Notification";

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

const MovieEditables = (props) => {
  const [newMovie, setNewMovie] = useState({});
  const [imageUrl, setImageUrl] = useState({imagePrt: "", imageLsc: ""});
  const [flashMessage, setFlashMessage] = useState(false);

  const showInfo = useSelector((state) => state.console.showInfo);
  const message = useSelector((state) => state.console.status.message);
  const activeMovie = useSelector((state) => state.console.activeMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newMovie && imageUrl.imagePrt && imageUrl.imageLsc) {
      dispatch(consoleActions.addMovieItem({movie: newMovie, url: imageUrl}));
    }

    return () => {}
  }, [newMovie, imageUrl, dispatch]);

  useEffect (() => {
    if (message) {
      setFlashMessage(true);
    };
    const timeout = setTimeout(() => {
      setFlashMessage(false);
      dispatch(consoleActions.clearStatusMessage());
    }, 5000);

    return () => clearTimeout(timeout);
  }, [message, dispatch])

  
  // Function to upload movie and reconstruct data for redux store
  const movieTransformer = async (movie) => {
    dispatch(consoleActions.uploadUpdateUI());
     // Get a key for a new Post.
     const id = push(child(ref(db), 'movies')).key;
   
     //processing image upload first: create a reference to firebase storage
     const storageRef = storageBucketRef(storage);
     //access the images node and create a new node for the movie
     const imagesRef = storageBucketRef(storageRef, `images/${id}`);
     
     // create a file ref for each image with the file name retrieved from the original image
     const portraitImageRef = storageBucketRef(imagesRef, movie['image-prt'][0].name);
     const landscapeImageRef = storageBucketRef(imagesRef, movie['image-lsc'][0].name);
   
     // upload the portrait image first 
     const uploadTaskPrt = uploadBytesResumable(portraitImageRef, movie['image-prt'][0]);
     uploadTaskPrt.then(snapshot => getDownloadURL(snapshot.ref)).then(downloadURL =>  { setImageUrl(prevState => ({...prevState,  imagePrt: downloadURL}))});
   
     // upload the landscape image when the portrait upload is done and returns true.
     const uploadTaskLsc = uploadBytesResumable(landscapeImageRef, movie['image-lsc'][0]);
     uploadTaskLsc.then(snapshot => getDownloadURL(snapshot.ref)).then(downloadURL => { setImageUrl(prevState => ({...prevState,  imageLsc: downloadURL}))});
   
     // formatting date for storage
     const date = new Date(movie['release-date']);
     let month = months[date.getMonth()];
     const formattedDate = `${month} ${date.getDate()}, ${date.getFullYear()}`;
     
     if (await uploadTaskPrt && await uploadTaskLsc) {
       console.log('this block executes');
       const stripImages = {...movie};
       delete stripImages["image-prt"];
       delete stripImages["image-lsc"];
       delete stripImages["release-date"];
       setNewMovie({id:id, releaseDate: formattedDate, ...stripImages});      
     }
  };

  const cancelMovieEdits = () => {
    dispatch(consoleActions.activeMovieItem());
  }

  const updateMovie = (movie) => {
    dispatch(consoleActions.updateMovieItem(movie));
  }

  const closeNotificationHandler = () => {
    setFlashMessage(false);
  }

  const header = (
    <div className="text-center pb-4 text-xl font-bold text-gray-700">
      <h2>Add New Movie</h2>
    </div>
  );

  const isActive = activeMovie ? true : false;

  return (
    <div className={props.className}>
      <div className="py-8 relative">
        {showInfo && isActive && <MovieInfo />}
        {!showInfo && (
          <Fragment>
            {header}
            <MovieDataForm transformer={movieTransformer} onCancel={cancelMovieEdits} onUpdate={updateMovie} />
          </Fragment>
        )}
        {flashMessage && <Notification onClose={closeNotificationHandler} />}
      </div>
    </div>
  );
};

export default MovieEditables;
