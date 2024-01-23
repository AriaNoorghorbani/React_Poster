import "./Posts.css";
import PostList from "../components/PostList";
import { Outlet, useLoaderData } from "react-router-dom";

function Posts() {
  const post = useLoaderData();

  function handleToggleModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      <Outlet />
      <main>
        {<div>Posts is loading...</div>}
        {post.length > 0 && <PostList posts={post} />}
        {post.length == 0 && <div>There is no post yet</div>}
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
