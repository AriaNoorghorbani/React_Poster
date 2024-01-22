import React from "react";
import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList() {
  const names = ["Aria", "Rashin"];

  return (
    <ul className={classes.posts}>
      <Post getName={names[0]} />
      <Post getName={names[1]} />
    </ul>
  );
}
