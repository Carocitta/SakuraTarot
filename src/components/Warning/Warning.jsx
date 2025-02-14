import { Overlay, Message } from "./Warning.styled";
import { UseOrientation } from "../../hooks/UseOrientation";

export const OrientationWarning = () => {
  const isPortrait = UseOrientation(); // ✅ Llamamos al hook correctamente

  if (!isPortrait) return null; // Si NO es modo retrato, no mostramos nada

  return (
    <Overlay>
      <Message>
        <h2>Por favor, gira el dispositivo</h2>
        <p>La aplicación DEBE verse en modo horizontal</p>
      </Message>
    </Overlay>
  );
};

