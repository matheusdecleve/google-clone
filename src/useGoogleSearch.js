import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "c171970625edf81a7";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    getData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
