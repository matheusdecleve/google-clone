import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import "./Search.css";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const searchFunction = (e) => {
    e.preventDefault();

    if (input) {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      });
      history.push("/search");
    }
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={input}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={searchFunction} variant="outlined">
            Pesquisa Google
          </Button>
          <Button variant="outlined">Estou com sorte</Button>
        </div>
      ) : (
        <div className="search__noButtons">
          <Button type="submit" onClick={searchFunction}></Button>
        </div>
      )}
    </form>
  );
}

export default Search;
