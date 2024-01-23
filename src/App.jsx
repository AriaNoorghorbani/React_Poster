import { useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Modal from "./components/Modal";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";

function App() {
  const [body, setBody] = useState("");
  const [text, setText] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [post, setPosts] = useState([
    { name: "Aria", text: "Salam Chetori" },
    { name: "Rashin", text: "Shirvani" },
  ]);

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
    setPosts((prevState) => [...prevState, { name: name, text: text }]);
    handleToggleModal();
  }

  function handleShowModal() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={handleShowModal} />
      {modalIsVisible && (
        <Modal toggleModal={handleToggleModal}>
          <NewPost
            handleChangeBody={handleChangeBody}
            handleChangeText={handleChangeText}
            onCancel={handleToggleModal}
            onAddPost={handleAddNewPost}
          />
        </Modal>
      )}
      <PostList getBody={body} getText={text} posts={post} />
    </>
  );
}

export default App;
