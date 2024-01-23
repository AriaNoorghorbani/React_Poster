import { useRef } from "react";
import { Form, Link, redirect } from "react-router-dom";
import Modal from "./Modal";
import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="text" />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name="name" />
        </p>
        <div className={classes.actions}>
          <Link type="button" to="..">
            Cancel
          </Link>
          <button>Submit</button>
        </div>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postBody = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
