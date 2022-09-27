import React from "react";

const ActionsContext = React.createContext({
  movies: [],
  showInfo: null,
  activeMovie: null,
  isEditing: false,
  status: {pending: '', message: ''},
  showForm: () => {},
  findMovie: () => {},
  getActiveMovie: (movie) => {},
  addMovie: (movie) => {},
  updateMovie: () => {},
  removeMovie: () => {},
});

export default ActionsContext;
