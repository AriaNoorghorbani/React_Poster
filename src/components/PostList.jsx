import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList({ posts }) {
  return (
    <ul className={classes.posts}>
      {posts.map((post) => {
        return (
          <Link to={post.id}>
            <Post
              key={post.id}
              id={post.id}
              name={post.name}
              text={post.text}
            />
          </Link>
        );
      })}
    </ul>
  );
}
