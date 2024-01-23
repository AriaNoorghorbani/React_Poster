import { useRef } from "react";
import classes from "./NewPost.module.css";

function NewPost({ handleChangeBody, handleChangeText, onCancel, onAddPost }) {
  const name = useRef();
  const text = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onAddPost(name.current.value, text.current.value);
  }

  return (
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
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
