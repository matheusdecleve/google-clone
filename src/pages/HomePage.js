import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import Search from "../components/Search";

import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Imagens</Link>
        <AppsIcon />
        <Avatar />
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Clone"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
