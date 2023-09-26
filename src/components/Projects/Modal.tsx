// In your Modal component
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, title }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.body.style.overflow = "hidden"; // Add this line to prevent background scrolling
    return () => {
      document.body.style.overflow = ""; // Reset the overflow property when Modal component is unmounted
    };
  }, []);

  if (!isClient) {
    return null;
  }

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          {title && <h1>{title}</h1>}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default Modal;
