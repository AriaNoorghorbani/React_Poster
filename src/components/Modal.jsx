import React from "react";
import classes from "./Modal.module.css";

export default function Modal({ children, closeModal }) {
  return (
    <>
      <div className={classes.backdrop} onClick={closeModal} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
