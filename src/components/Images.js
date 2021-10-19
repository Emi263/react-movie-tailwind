import React, { useState } from "react";
import SkeletonElement from "../Skeletons/SkeletonElement";
function Images({ id }) {
  const [images, setImages] = useState(null);
  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.backdrops.slice(0, 6));
      });
  }, []);
  return (
    <>
      <h1 className="text-base text-center font-mono text-purple-600 ">
        Some scenes from the movie
      </h1>
      <div className="p-2 grid grid-cols-2  gap-2 items-center">
        {images &&
          images.map((img, index) => (
            <div key={index} className="relative w-full mx-auto bg-gray-500">
              <img
                className="w-full max-w-full h-auto rounded-sm shadow"
                src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
              />
            </div>
          ))}
        {images == null ||
          (images && images.length == 0 && (
            <div className="text-center text-lg">
              Sorry, no photos available for this movie :(
            </div>
          ))}
      </div>{" "}
    </>
  );
}

export default Images;
