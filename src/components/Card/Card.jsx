import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  position: absolute;
  transform: rotate(${props => props.rotation});
  left: ${props => props.shift};
  z-index: ${props => props.$zIndex};
  width: 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    filter: grayscale(1) drop-shadow(12px 12px 8px black);
   
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
