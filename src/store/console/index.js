import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./actions-slice"

const store = configureStore({
  reducer: { console: movieReducer }
});

export default store;