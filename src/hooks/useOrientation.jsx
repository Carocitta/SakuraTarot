
import { useState, useEffect } from 'react';

export const useOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  

  useEffect(() => {
    const checkOrientation = () => {
      const portrait = window.innerHeight > window.innerWidth;
      setIsPortrait(portrait);
    };

    
    checkOrientation();

    
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return isPortrait;
};