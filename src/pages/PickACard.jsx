import DeckOfCards from "../components/DeckOfCards/DeckOfCards";
import Header from "../components/Header/Header";

function PickACard() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <DeckOfCards />
        <div style={{ padding: "120px", fontSize: "24px", fontWeight: "bold" }}>
        Caza tu fortuna del PASADO... 
        ¡Elige una carta y descubre los secretos que te aguardan!
        </div>
      </div>
    </>
  );
}

export default PickACard;
