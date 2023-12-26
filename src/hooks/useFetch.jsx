import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, 5000);
  }, [url]);

  return [data];
};

export default useFetch;
