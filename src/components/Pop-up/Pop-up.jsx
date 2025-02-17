import React from 'react';
import { PopupContainer, Overlay } from './Pop-up.styled';

const Popup = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* Esta es la capa que cubre toda la pantalla */}
      <Overlay onClick={onClose}>
        {/* Este es el contenido del popup */}
        <PopupContainer onClick={(e) => e.stopPropagation()}>
          {children}
        </PopupContainer>                            
      </Overlay>
    </>
  );
};

export default Popup;