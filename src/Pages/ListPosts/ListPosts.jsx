import React from "react";
import Posts from "../../components/Posts/Posts";
import { useContext } from "react";
import { ContextList } from "../../context/ContextList";
import style from "./listPosts.module.css";

function ListPosts() {
  const { valueContext } = useContext(ContextList);

  return (
    <div className={style.posts}>
      {valueContext.map((item) => {
        return <Posts {...item} key={item.id} />;
      })}
    </div>
  );
}

export default ListPosts;
