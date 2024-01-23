import React from "react";
import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList({ posts }) {
  return (
    <ul className={classes.posts}>
      {posts.map((post) => {
        return <Post key={post.id} name={post.name} text={post.text} />;
      })}
    </ul>
  );
}
