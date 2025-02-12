import styled from "styled-components";

export const StyledDeckOfCards = styled.div`
  position: relative;
  display: flex;  
  justify-content: center; 
  width: 100%; 
  margin-top: 12%;
  @media (max-width: 844px) and (orientation: landscape) {
     height: 135px; //revisar esto
     margin-top: 1%;
  }
`;

