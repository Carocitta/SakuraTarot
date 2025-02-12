import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledDeckOfCards } from "./DeckOfCards.elements";  
import Card from "../Card/Card";
import Api from "../../api/Api";

const DeckOfCards = ({ changeStep }) => {
  const navigation = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pickedCards, setPickedCards] = useState({
    past: null,
    present: null,
    future: null,
  });

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (cardId) => {
    if (!pickedCards.past) {
      setPickedCards((prevState) => ({ ...prevState, past: cardId }));
      changeStep("present");
    } else if (!pickedCards.present) {
      setPickedCards((prevState) => ({ ...prevState, present: cardId }));
      changeStep("future");
    } else {
      setPickedCards((prevState) => ({ ...prevState, future: cardId }));

      navigation("/reading", {
        state: {
          name: "Name to be added from Form", 
          past: pickedCards.past,
          present: pickedCards.present,
          future: cardId,
        },
      });
    }
  };

  const filteredCards = (cards, pickedCards) => {
    const pickedValues = Object.values(pickedCards).filter((v) => v !== null);
    return cards.filter((card) => !pickedValues.includes(card.id));
  };

  return (
    <Api>
      {(cards) => (
        <>
          {/* <ul>
            <li>Past: {pickedCards.past}</li>
            <li>Present: {pickedCards.present}</li>
            <li>Future: {pickedCards.future}</li>
          </ul> */}

          <StyledDeckOfCards> {}
            {filteredCards(cards, pickedCards).map((card) => {
              const totalCards = cards.length;
              const middleIndex = (totalCards - 1) / 2;

              const maxRotation = 20;
              const rotation = `${
                ((cards.indexOf(card) - middleIndex) / middleIndex) * maxRotation
              }deg`;

              const maxShift = windowWidth * 0.45;
              const shift = `${
                ((cards.indexOf(card) - middleIndex) / middleIndex) * maxShift
              }px`;

              return (
                <Card
                  key={card.id}
                  cardInput={card}
                  rotation={rotation}
                  shift={shift}
                  externalHandleOnClickEvent={handleClick}
                />
              );
            })}
          </StyledDeckOfCards>
        </>
      )}
    </Api>
  );
};

export default DeckOfCards;