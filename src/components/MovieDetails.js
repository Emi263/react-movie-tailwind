import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../Hooks/useData";
import SingleMovie from "./SingleMovie";
import { Link } from "react-router-dom";
import Images from "./Images";
import "boxicons";

function MovieDetails() {
  const [singleMovie, setSingleMovie] = useState(null);
  const { id } = useParams();
  const { data } = useData();
  useEffect(() => {
    data && setSingleMovie(data.filter((dt) => dt.id == id));
  }, [data]); //took a long time to solve it ffs, dependence=data
  let movie = singleMovie && singleMovie[0];
  return (
    <div>
      <span className=" ">
        <Link to="/" className=" text-blue-500 font-bold">
          {" "}
          <span className="flex m-">
            {" "}
            <box-icon name="arrow-back"></box-icon>{" "}
            <span className="ml-1">home</span>
          </span>
        </Link>
      </span>
      {singleMovie && (
        <div className="">
          {" "}
          <SingleMovie
            title={movie.title}
            poster={movie.poster_path}
            overview={movie.overview}
          />{" "}
        </div>
      )}
      <Images id={id} />
    </div>
  );
}

export default MovieDetails;
