import React, { useState } from 'react';
import Popup  from '../components/Pop-up/Pop-up';

function HistorialPages() {
  // Este es como un interruptor que controla si el popup está abierto
  const [abierto, setAbierto] = useState(false);

  return (
    <div>
      {/* Este es el botón que abre el popup */}
      <button onClick={() => setAbierto(true)}>
        Abrir Popup
      </button>

      {/* Este es el popup que se muestra cuando está abierto */}
      <Popup 
        isOpen={abierto}
        onClose={() => setAbierto(false)}
      >
        <img className="popImag" src="src/assets/images/yue.png" alt="El juez Yue de Sakura" ></img>
        <p className="popText">Tu destino ha sido cazado por el Juez Yue</p>
      </Popup>
    </div>
  );
}

export default HistorialPages;

