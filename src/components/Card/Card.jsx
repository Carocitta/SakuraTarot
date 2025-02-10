// import { StyledCard, CardHiddenImage } from "./Card.elements";

// function Card({
//   cardInput,
//   rotation,
//   shift,
//   zIndex,
//   externalHandleOnClickEvent,
// }) {
//   const handleOnClickEvent = () => {
//     externalHandleOnClickEvent(cardInput.id);

//     console.log("Card with id", cardInput.id, "clicked");
//   };

//   return (
//     <StyledCard
//       rotation={rotation}
//       shift={shift}
//       zIndex={zIndex}
//       onClick={handleOnClickEvent}
//     >
//       <CardHiddenImage src={cardInput.cardsReverse.sakuraReverse} />
//     </StyledCard>
//   );
// }

// export default Card;





import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  position: absolute;
  transform: rotate(${props => props.rotation});
  left: ${props => props.shift};
  z-index: ${props => props.$zIndex};
  width: 100px;
  height: 150px;

  /* height: 406px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${({ rotation }) => rotation})
    translateX(${({ shift }) => shift});
  transition: transform 0.3s ease;
  z-index: ${({ zIndex }) => zIndex};

  &:hover {
    transform: translate(-50%, -50%) scale(1.1)
      rotate(${({ rotation }) => rotation}) translateX(${({ shift }) => shift});
    z-index: 100; 
  }
  @media (max-width: 844px) and (orientation: landscape) {
    height: 60px;
  }

`;

const Card = ({ cardInput, rotation, shift, $zIndex, externalHandleOnClickEvent }) => {
  if (cardInput.cardsReverse && cardInput.cardsReverse.sakuraReverse) {
    return (
      <StyledCard
        rotation={rotation}
        shift={shift}
        $zIndex={$zIndex}
        onClick={() => externalHandleOnClickEvent(cardInput.id)}
      >
        <img src={cardInput.cardsReverse.sakuraReverse} alt="image of card Sakura Reverse" width="50" />
      </StyledCard>
    );
  } 

};

export default Card;
