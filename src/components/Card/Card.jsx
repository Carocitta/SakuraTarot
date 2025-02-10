import { StyledCard, CardHiddenImage } from "./Card.elements";

function Card({
  cardInput,
  rotation,
  shift,
  zIndex,
  externalHandleOnClickEvent,
}) {
  const handleOnClickEvent = () => {
    externalHandleOnClickEvent(cardInput.id);

    console.log("Card with id", cardInput.id, "clicked");
  };

  return (
    <StyledCard
      rotation={rotation}
      shift={shift}
      zIndex={zIndex}
      onClick={handleOnClickEvent}
    >
      <CardHiddenImage src={cardInput.cardsReverse.sakuraReverse} />
    </StyledCard>
  );
}

export default Card;
