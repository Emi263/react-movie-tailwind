import React from "react";

function SingleMovie({ title, poster, overview }) {
  return (
    <div className="relative">
      <h1 className=" text-center mb-1 font-goo text-xl">{title}</h1>
      <img
        className="w-1/2 h-auto mx-auto max-w-full sm:w-1/3 md:w-1/4 rounded-sm shadow-md "
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
      />
      <h1 className="text-center text-indigo-800 font-mono font-bold m-2">
        Overview
      </h1>
      <p className="p-2 leading-5 font-serif shadow-lg mb-3 max-w-md mx-auto ">
        {overview}
      </p>
    </div>
  );
}

export default SingleMovie;
