// src/hooks/useOrientation.js
import { useState, useEffect } from 'react';

export const UseOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  

  useEffect(() => {
    const checkOrientation = () => {
      const portrait = window.innerHeight > window.innerWidth;
      setIsPortrait(portrait);
    };

    // Verificar al inicio
    checkOrientation();

    // Escuchar cambios de orientación
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    // Limpiar eventos cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return isPortrait;
};