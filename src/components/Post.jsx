import React from "react";
import classes from "./Post.module.css";

export default function ({ name, text, id }) {
  return (
    <li className={classes.post}>
      {/* <Link to={id}> */}
      <p className={classes.author}>{name}</p>
      <p className={classes.text}>{text}</p>
      {/* </Link> */}
    </li>
  );
}
