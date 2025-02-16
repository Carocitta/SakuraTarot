import React from "react";
import { StyledCard } from "./Card.elements";

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