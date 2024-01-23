import React from "react";
import classes from "./Modal.module.css";

export default function Modal({ children, toggleModal }) {
  return (
    <>
      <div className={classes.backdrop} onClick={toggleModal} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
