import React from "react";
import "./Modal.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">Modal Title</h2>
        <p className="modal__body">
          This is the content of the modal. You can add any HTML or React
          components here.
        </p>
        <button className="modal__close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;



