import { createSlice } from "@reduxjs/toolkit";
import { db, storage } from "../../firebase-config.js";
import { ref, set, update, remove } from "firebase/database";
import { ref as storageBucketRef, deleteObject } from "firebase/storage";


const initialState = {
  movies: [],
  data: {},
  showInfo: null,
  activeMovie: null,
  isEditing: false,
  status: { pending: "", message: "" }
};


const actionSlice = createSlice({
  name: "console",
  initialState,
  reducers: {
    loadMovies (state, action) {
      let data;
      if (action.payload) {
        data = action.payload;
        state.data = action.payload;
      } else {
        data = state.data;
      }

      const movieItems = [];
      for (const key in data) {
        movieItems.push({
          key: key,
          ...data[key],
        });
      }
      state.movies = movieItems;
    },
    findMovieItem(state, action) {
      const keywords = action.payload.toLowerCase();
      let queriedMovies;
      if (keywords) {
        queriedMovies = state.movies.filter((movie) =>
          movie.title?.includes(keywords)
        );
      } else {
        const data = state.movies;
        const movieItems = [];
        for (const key in data) {
          movieItems.push({
            key: key,
            ...data[key],
          });
        }
        queriedMovies = movieItems;
      }
      state.movies = queriedMovies;
    },
    activeMovieItem(state, action) {
      if (action.payload) {
        state.activeMovie = action.payload;
      }
      state.showInfo = true;
    },
    showForm(state, action) {
      state.showInfo = false;
      
      if (action.payload === "edit") {
        state.isEditing = true;
      } else {
        state.isEditing = false;
      }
    },
    uploadUpdateUI (state) {
      state.status.pending = true;
    },
    uploadImageMessage (state, action) {
      state.status.message = action.payload.message;
    },
    clearStatusMessage (state) {
      state.status.message = "";
    },
    addMovieItem (state, action) {
      const item = action.payload.movie;
      const url = action.payload.url;
      let message;
  
      //formatting data for database
      const transformData = {
        id: item.id,
        title: item.title,
        synopsis: item.synopsis,
        releaseDate: item.releaseDate,
        rating: item.rating,
        cast: item.cast,
        genre: item.genre,
        trailer: item.trailer,
        download: item.download,
        review: item.review,
        tags: item.tags,
        imageUrl: url,
      };
      
      // send data to db and watch for changes
      try {
        set(ref(db, "movies/" + item.id), {
          ...transformData
        });
        message = "Data saved successfully!";        
      } catch (error) {
        message = "Failed: The movie did not upload because " + error;        
      }

      state.status = {pending: false, message: message}
    },
    updateMovieItem (state, action) {
      state.status.pending = true;
      const movie = action.payload;
      const updates = {};
      let response;
  
      const stripObjectKey = {
        id: movie.id,
        title: movie.title,
        synopsis: movie.synopsis,
        releaseDate: state.activeMovie.releaseDate,
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

      try {
        update(ref(db), updates)        
        response = `Success: ${movie.title} has been updated!`;
      } catch (error) {
        response = `Failed: ${movie.title} did not update due to ${error}.`;        
      }
      
      state.status = {pending: false, message: response};
      state.activeMovie = {key: state.activeMovie.key, ...stripObjectKey};
      state.showInfo = true;
    },
    removeMovieItem (state) {
      state.status.pending = true;
      const title = state.activeMovie.title;
  
      const image1 = state.activeMovie.imageUrl.imagePrt.split("%2F");
      const imageTitle1 = image1[2].split("?");
      const image2 = state.activeMovie.imageUrl.imageLsc.split("%2F");
      const imageTitle2 = image2[2].split("?");
  
      const imageRef1 = storageBucketRef(storage, `images/${state.activeMovie.key}/${imageTitle1[0]}`);
      const imageRef2 = storageBucketRef(storage, `images/${state.activeMovie.key}/${imageTitle2[0]}`);
      
      try {
        remove(ref(db, `movies/${state.activeMovie.key}`));      
        deleteObject(imageRef1);
        deleteObject(imageRef2);
        // File deleted successfully
        const response = `Success: ${title} has been removed from database!`;
        state.status = {pending: false, message: response};
        state.activeMovie = {};
        state.showInfo = false;
      } catch (error) {
        console.log(error);        
        const response = `Failed: ${title} was not removed due to ${error}. Please try again!`;
        state.status = {pending: false, message: response}
      }
    }  
  },
});

export const consoleActions = actionSlice.actions;

export default actionSlice.reducer;
