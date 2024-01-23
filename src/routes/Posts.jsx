import { useEffect, useState } from "react";

import "./Posts.css";
import MainHeader from "../components/MainHeader";
import Modal from "../components/Modal";
import NewPost from "../components/NewPost";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

function Posts() {
  const [body, setBody] = useState("");
  const [text, setText] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [post, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleChangeBody(event) {
    setBody(event.target.value);
  }

  function handleChangeText(event) {
    setText(event.target.value);
  }

  function handleToggleModal() {
    setModalIsVisible(false);
  }

  function handleAddNewPost(name, text) {
    const postBody = { name, text };
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((prevState) => [...prevState, { name: name, text: text }]);
    handleToggleModal();
  }

  function handleShowModal() {
    setModalIsVisible(true);
  }

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/posts");

      if (!response.ok) {
        throw new Error("Can fetch Posts");
      }

      const resData = await response.json();
      setPosts(resData.posts);
      setIsLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <Outlet />
      <main>
        {isLoading && <div>Posts is loading...</div>}
        {post.length > 0 && (
          <PostList getBody={body} getText={text} posts={post} />
        )}
        {!isLoading && post.length == 0 && <div>There is no post yet</div>}
      </main>
    </>
  );
}

export default Posts;
