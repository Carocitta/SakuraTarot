import DeckOfCards from "../components/DeckOfCards/DeckOfCards";
import Header from "../components/Header/Header";
import { useState } from "react";
import { Title, Subtitle } from "./PickACard.elements";


function PickACard() {
  const [step, setStep] = useState("past")
  const changeStep = (newStep) => setStep(newStep)
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
        <DeckOfCards changeStep={changeStep} />



        {step === "past" && (
          <Title>
            Caza tu fortuna del PASADO...
            <Subtitle>¡Elige una carta y descubre los secretos que te aguardan!</Subtitle>
          </Title>
        )}
        {step === "present" && (
          <Title>
            Caza tu fortuna del PRESENTE con valentía... 
            <Subtitle>¡Elige una carta y abre las puertas de tu brillante destino!</Subtitle>
          </Title>
        )}
        {step === "future" && (
          <Title>
            El poder de las cartas te guían tu FUTURO...
            <Subtitle>Eligiendo una carta. ¡Descubre qué magia te espera!</Subtitle>
          </Title>
        )}
      </div>
    </>
  );
}

export default PickACard;