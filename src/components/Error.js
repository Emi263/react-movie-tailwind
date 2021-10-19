import React, { useEffect } from "react";
function Error() {
  return (
    <div>
      <h1 className="mt-5 block text-center text-3xl text-red-600">
        Error page
      </h1>
      <h3 className="mt-3 block text-center text-2xl text-red-700 max-w-lg mr-auto ml-auto">
        Sorry, something went werong with the api of Movie Database (Can't do
        anything about that). Please come back later!
      </h3>
      <h1 className="text-red-900 text-9xl text-center">404</h1>
    </div>
  );
}

export default Error;
