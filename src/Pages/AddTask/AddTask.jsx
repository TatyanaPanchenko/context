import React from "react";
import { useState, useContext } from "react";
import { ContextList } from "../../context/ContextList";
import style from "./addTask.module.css";

function AddTask() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { setUpdateContext } = useContext(ContextList);
  function handleForm(e) {
    e.preventDefault();
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, text }),
    })
      .then((result) => result.json())
      .then((data) => setUpdateContext(data));
  }
  return (
    <form className={style["form-inner"]} onSubmit={handleForm}>
      <input
        type="text"
        value={title}
        onChange={() => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        placeholder="Text"
        value={text}
        onChange={() => setText(e.target.value)}
      />
      <input type="submit" value="Create task" />
    </form>
  );
}

export default AddTask;
