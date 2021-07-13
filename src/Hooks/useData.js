import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3//trending/all/day?api_key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        console.log(data.results);
      });
  }, []);

  return { data };
};

export default useData;
