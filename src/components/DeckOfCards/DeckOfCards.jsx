import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledDeckOfCards } from "./DeckOfCards.styled";
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
  const [shuffledCards, setShuffledCards] = useState([]);

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

  const shuffleCards = (cards) => {
    if (!cards) return [];

    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <Api>
      {(cards) => {
        const shuffled = shuffledCards.length === 0 && cards ? shuffleCards(cards) : shuffledCards;
        return (
          <>
            <StyledDeckOfCards>
              {shuffled
                .filter((card) => !Object.values(pickedCards).includes(card.id))
                .map((card, index) => {
                  const totalCards = shuffled.length;
                  const middleIndex = (totalCards - 1) / 2;

                  const maxRotation = 20;
                  const rotation = `${((index - middleIndex) / middleIndex) * maxRotation}deg`;

                  const maxShift = windowWidth * 0.45;
                  const shift = `${((index - middleIndex) / middleIndex) * maxShift}px`;

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
        );
      }}
    </Api>
  );
};

export default DeckOfCards;
