// src/components/common/OrientationWarning.js

export const OrientationWarning = () => {
  return (
    <Overlay>
      <Message>
        <h2>Por favor, gira el dispositivo</h2>
        <p>La aplicación <br>DEBE</br> verse en modo horizontal</p>
      </Message>
    </Overlay>
  );
};
