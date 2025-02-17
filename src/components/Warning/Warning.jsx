import { Overlay, Message } from "./Warning.styled";
import { useOrientation } from "../../hooks/useOrientation";

export const OrientationWarning = () => {
  const isPortrait = useOrientation(); 

  if (!isPortrait) return null; 

  return (
    <Overlay>
      <Message>
        <h2>Por favor, gira el dispositivo</h2>
        <p>La aplicación DEBE verse en modo horizontal</p>
      </Message>
    </Overlay>
  );
};

