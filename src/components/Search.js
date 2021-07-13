import React from "react";

function Search({ handleChange }) {
  return (
    <div className=" bg-gradient-to-r from-yellow-300 to-yellow-500  w-full relative  h-28 flex items-center justify-center">
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={handleChange}
        className="p-2 outline-none rounded-md transition ease-in duration-200 focus:bg-indigo-500 focus:text-yellow-300"
      />
    </div>
  );
}

export default Search;
