import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

export default function Modal({ children, closeModal }) {
  const navigate = useNavigate();

  function handleCloseModal() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={handleCloseModal} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
