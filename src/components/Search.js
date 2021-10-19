import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { GlobalContext, GlobalProvider } from "../store/GlobalCtx";
function Search({ searchVal = null, setSearchVal, setMovies }) {
  const { moviesState, setMoviesState } = useContext(GlobalContext);

  useEffect(() => {
    searchVal &&
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${searchVal}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMoviesState(data.results);
        });
  }, [searchVal]);

  return (
    <div className=" bg-gradient-to-r from-yellow-300 to-yellow-500  w-full relative  h-28 flex items-center justify-center">
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={(e) => setSearchVal(e.target.value)}
        className="p-2 outline-none rounded-md transition ease-in duration-200 focus:bg-indigo-500 focus:text-yellow-300"
      />
    </div>
  );
}

export default Search;
