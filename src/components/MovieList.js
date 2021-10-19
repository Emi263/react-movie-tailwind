import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import Movie from "./Movie";
import Img from "./noImg.png";
import { Link, useLocation } from "react-router-dom";
import useData from "../Hooks/useData";
import SkeletonElement from "../Skeletons/SkeletonElement";
import { GlobalContext } from "../store/GlobalCtx";
import Error from "./Error";
function MovieList({ error }) {
  const { setMoviesState, moviesState } = useContext(GlobalContext);
  const { pathname } = useLocation();
  const [movies, setMovies] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  const handleChange = (e) => {
    //function in parent that grabs the data from child
    if (e.target.value.trim().length === 0) {
      setSearchValue(null);
    } else {
      setSearchValue(e.target.value);
    }
  };

  const { data } = useData();

  !searchValue &&
    setTimeout(() => {
      setMoviesState(data);
    }, 1000); //for the purpose of SkeletonElement
  useEffect(() => {
    searchValue && setMoviesState(movies);
  }, [movies]);

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <Search
        searchVal={searchValue}
        setSearchVal={setSearchValue}
        setMovies={setMovies}
      />
      {pathname == "/" && !searchValue && movies == null && (
        <h1 className="text-center text-2xl text-blue-900 mt">Trending...</h1>
      )}
      <div className="grid grid-cols-auto-fit gap-5">
        {moviesState &&
          moviesState.map((movie) => (
            <Link key={movie.id} to={`movie/${movie.id}`}>
              <div className="w-full relative ">
                <Movie title={movie.title} poster={movie.poster_path} />
              </div>
            </Link>
          ))}
        {(searchValue && moviesState == null) ||
          (moviesState && moviesState.length == 0 && (
            <div className="text-center text-lg font-mono font-bold">
              {" "}
              Sorry, no results found
            </div>
          ))}
        {moviesState === null &&
          [0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
            <SkeletonElement key={n} type="title" />
          ))}
      </div>
    </div>
  );
}

export default MovieList;
