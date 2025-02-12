// popupStyled.js
import styled from 'styled-components';
import Popup from './Pop-up';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 30%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  
  `
  export const PopupContainer = styled.div`
  display: flex;
  position: fixed;
  width: 40%;
  height: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--lightpurple);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  .popText{
  display: flex;
  flex-direction: column;  
  align-items: center;  
  justify-content: flex-end
  }
  `;
 
  
  
 
  

  
  
;

