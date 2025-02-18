import React from 'react';
import { PopupContainer, Overlay } from './Pop-up.styled';

const Popup = ({ isOpen, onClose, children }) => {
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
