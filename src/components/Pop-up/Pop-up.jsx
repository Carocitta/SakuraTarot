import React from "react";
import { PopupContainer, Overlay } from "./Pop-up.styled";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // No renderiza si isOpen es false

  return (
    <>
      <Overlay onClick={onClose}>
        <PopupContainer onClick={(e) => e.stopPropagation()}>
          {children}
        </PopupContainer>
      </Overlay>
    </>
  );
};

export default Popup;
