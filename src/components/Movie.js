import React from "react";
import { motion } from "framer-motion";
function Movie({ title, poster, overview }) {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      layout
      animate={{ scale: 1 }}
      className=" sm:mt-1 cursor-pointer shadow-lg p-5"
    >
      <h1 className="underline text-lg text-center font-goo font-light">
        {title != undefined ? title : "No available title"}
      </h1>
      <img
        className="mx-auto rounded-sm shadow-md border-yellow-600  object-cover max-w-full "
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
      />
      {overview && (
        <h1 className="text-center font-extrabold text-2xl uppercase mt-9">
          overview
        </h1>
      )}
      <p>{overview}</p>
    </motion.div>
  );
}

export default Movie;
