import React from "react";
import style from "./posts.module.css";

function Posts({ title, body }) {
  return (
    <div className={style["list-inner"]}>
      <div className={style["list-title"]}>{title}</div>
      <div className={style["list-text"]}>{body}</div>
    </div>
  );
}

export default Posts;
