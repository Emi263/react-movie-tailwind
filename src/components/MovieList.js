import React, { useEffect, useState } from "react";
import Search from "./Search";
import Movie from "./Movie";
import Img from "./noImg.png";
import { Link, useLocation } from "react-router-dom";
import useData from "../Hooks/useData";
import SkeletonElement from "../Skeletons/SkeletonElement";
function MovieList() {
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

  setTimeout(() => {
    setMovies(data);
  }, 1000); //for the purpose of SkeletonElement

  return (
    <div>
      <Search handleChange={handleChange} />
      {pathname == "/" ? (
        <h1 className="text-center text-2xl text-blue-900 mt">Trending...</h1>
      ) : (
        ""
      )}
      <div className="grid grid-cols-auto-fit gap-5">
        {movies &&
          movies.map((movie) => (
            <Link key={movie.id} to={`movie/${movie.id}`}>
              <div className="w-full relative ">
                <Movie title={movie.title} poster={movie.poster_path} />
              </div>
            </Link>
          ))}
        {movies === null &&
          [0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
            <SkeletonElement key={n} type="title" />
          ))}
      </div>
    </div>
  );
}

export default MovieList;
