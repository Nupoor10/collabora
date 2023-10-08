import React from "react";
import { ImCancelCircle } from "react-icons/im";
import "./Modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="overlay"
        onClick={closeModal}
      ></div>
      <div style={{ display: isOpen ? "block" : "none" }} className="modal">
        <div className="modal__button">
            <button className="modal_cancel_btn" onClick={closeModal}>
            <h2><ImCancelCircle height="40px" /></h2>
            </button>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Modal;
