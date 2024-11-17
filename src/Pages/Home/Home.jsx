import React from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";

function Home() {
  return (
    <div className={style.home}>
      <div className={style["home-btn"]}>
        <Link to="/list">Posts</Link>
      </div>
      <div className={style["home-btn"]}>
        <Link to="/add">Add</Link>
      </div>
    </div>
  );
}

export default Home;
