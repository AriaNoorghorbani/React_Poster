import React from "react";
import classes from "./Post.module.css";

export default function ({ getName }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{getName}</p>
      <p className={classes.text}>Blog Post</p>
    </li>
  );
}
