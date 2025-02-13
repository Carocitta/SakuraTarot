import DeckOfCards from "../components/DeckOfCards/DeckOfCards";
import Header from "../components/Header/Header";
import { useState } from "react";
import styled from 'styled-components';


const Title = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;  
  align-items: center;  
  justify-content: flex-end;  
  padding: 120px;
  font-size: 1.8rem;
  font-weight: medium;
  text-align: center;
  height: 100%;  
  margin-top: 7rem;


  @media (max-width: 767px) and (orientation: landscape) {
    height: 50%;
    margin-top: 2rem;
    justify-content: center;  
    padding: 12px;
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.p`
width: 100%;
font-size: 1.5rem;
text-align: center;

@media (max-width: 767px) and (orientation: landscape) {
    height: 50%;
justify-content: center;  
    padding: 1px;
    font-size: 1rem;
  }
`;


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