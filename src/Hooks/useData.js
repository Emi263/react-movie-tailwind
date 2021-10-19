import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../store/GlobalCtx";

const useData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();

    fetch(
      `https://api.themoviedb.org/3//trending/all/day?api_key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setData(data.results);
      })
      .catch((err) =>
        setError(
          "Sorry, something went werong with the api of Movie Database (Can't do anything about that). Please come back later!"
        )
      );
  }, [data]);

  return { data, error };
};

export default useData;
