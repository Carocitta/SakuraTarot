import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import { StyledDeckOfCards } from "./DeckOfCards.elements";

const DeckOfCards = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pickedCards, setPickedCards] = useState({
    past: null,
    present: null,
    future: null,
  });

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/",
        );
        setCards(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching cards:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (cardId) => {
    console.log("Externally: Card with id", cardId, "clicked");

    if (!pickedCards.past) {
      setPickedCards((prevState) => ({
        ...prevState,
        past: cardId,
      }));
      setCards(cards.filter((card) => card.id !== cardId));
    } else if (!pickedCards.present) {
      setPickedCards((prevState) => ({
        ...prevState,
        present: cardId,
      }));
      setCards(cards.filter((card) => card.id !== cardId));
    } else {
      setPickedCards((prevState) => ({
        ...prevState,
        future: cardId,
      }));

      navigation("/reading", {
        state: {
          name: "XXX",
          past: pickedCards.past,
          present: pickedCards.present,
          future: cardId,
        },
      });

      // redirect to somewhere else
    }
  };

  return (
    <>
      <ul>
        <li>Past: {pickedCards.past}</li>
        <li>Present: {pickedCards.present}</li>
        <li>Future: {pickedCards.future}</li>
      </ul>
      {error && <p>something went wrong</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <StyledDeckOfCards>
          {cards.map((card, index) => {
            const totalCards = cards.length;
            const middleIndex = (totalCards - 1) / 2;

            // Adjust max rotation and shift to spread evenly
            const maxRotation = 20; // Adjust fan effect
            const rotation = `${((index - middleIndex) / middleIndex) * maxRotation}deg`;

            const maxShift = windowWidth * 0.45; // Spread cards across full width
            const shift = `${((index - middleIndex) / middleIndex) * maxShift}px`;

            const zIndex = index; // Ensure proper stacking order

            return (
              <Card
                key={index}
                cardInput={card}
                rotation={rotation}
                shift={shift}
                zIndex={zIndex}
                externalHandleOnClickEvent={handleClick}
              />
            );
          })}
        </StyledDeckOfCards>
      )}
    </>
  );
};

export default DeckOfCards;
