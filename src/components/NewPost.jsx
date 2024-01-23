import { useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import classes from "./NewPost.module.css";

function NewPost({ handleChangeBody, handleChangeText, onCancel, onAddPost }) {
  const name = useRef();
  const text = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onAddPost(name.current.value, text.current.value);
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={handleChangeBody}
            ref={text}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={handleChangeText}
            ref={name}
          />
        </p>
        <div className={classes.actions}>
          <Link type="button" to="..">
            Cancel
          </Link>
          <button>Submit</button>
        </div>
      </form>
    </Modal>
  );
}

export default NewPost;
