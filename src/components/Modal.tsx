// In your Modal component
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children }: any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!isClient) {
    return null;
  }

  const handleCloseClick = (e: any) => {
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
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );

  const modalRoot = document.getElementById("modal-root");

  return modalRoot ? ReactDOM.createPortal(modalContent, modalRoot) : null;
};

export default Modal;
