import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  moviesState: null,
};

//context
export const GlobalContext = React.createContext(initialState);

//functions

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [error, setError] = useState(false);

  const setMoviesState = (movies) => {
    dispatch({ type: "SETMOVIES", payload: movies });
  };
  const changeError = () => {
    setError(true);
  };

  const value = {
    moviesState: state.moviesState,
    setMoviesState,
    error,
    changeError,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
