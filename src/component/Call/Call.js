import React, { useState } from "react";
import "./Call.css";
import Modal from "react-modal"; // Import React Modal

const Call = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="req-box">
        <p>Request a Call Back</p>
        <input className="inputcls" type="text" placeholder="Enter Name" />
        <br />
        <input className="inputcls" type="text" placeholder="Mobile Number" />
        <br />
        <button className="buttcls" onClick={openModal}>
          Request a call Back
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Request a Call Back"
        className="modalCustomStyles"
        overlayClassName="overlayCustomStyles"
      >
        <h2>Request submitted!</h2>
        <p>We will call you back shortly.</p>
        <button className="closeButton" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Call;
