// Modal.js
import React from "react";
import ReactModal from "react-modal";
import { MdClose } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      ariaHideApp={false}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-2/3 bg-white p-6 rounded-md shadow-md overflow-hidden"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
    >
      <div className="absolute top-0 right-0 m-2">
        <button onClick={onClose} className="font-bold text-lg pb-6">
          <MdClose size={24} />
        </button>
      </div>
      <div className="modal-body max-h-96 overflow-y-auto pb-6">
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
