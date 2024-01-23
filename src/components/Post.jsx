import React from "react";
import classes from "./Post.module.css";

export default function ({ name, text }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{name}</p>
      <p className={classes.text}>{text}</p>
    </li>
  );
}
