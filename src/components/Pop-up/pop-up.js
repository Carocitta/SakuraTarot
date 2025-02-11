import React, { useState } from 'react';
import { PopupContainer, Overlay } from './popupStyled';

const Popup = ({ isOpen, onClose, children }) => {
    return (
        <>
        <Overlay onclick={onClose}>
            <PopupContainer onclick={(e) => e.stopPropagation()}>
                {children}
            </PopupContainer>
        </Overlay>
        </>
    );
};

export default function pupUp () {
    const [abierto, setAbierto] = useState(false);
    return (
        <div>
        <button onclick={() => setAbierto(true)}>
        Abrir pupUp 
        </button>

        <Popup isOpen={abierto}
        onClose={() => setAbierto(false)}>
            <img src="/Pop-up/.png" alt="El juex Yung de Sakura"></img>
            <p>Tú destino a sido cazado por el Juez Yue</p>
        </Popup>
        </div>
    );
}