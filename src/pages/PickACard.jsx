import DeckOfCards from "../components/DeckOfCards/DeckOfCards";
import Header from "../components/Header/Header";
import { useState } from "react";

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

        {step == "past" && <div className="subtitle" style={{
        width: "50%", padding: "120px", fontSize: "24px", fontWeight: "bold" }}>
        Caza tu fortuna del PASADO... 
        ¡Elige una carta y descubre los secretos que te aguardan!
        </div>}
        {step == "present" && <div className="subtitle" style={{ padding: "120px", fontSize: "24px", fontWeight: "bold" }}>
        Caza tu fortuna del PRESENT... 
        ¡Elige una carta y descubre los secretos que te aguardan!
        </div>}
        {step == "future" && <div className="subtitle" style={{ padding: "120px", fontSize: "24px", fontWeight: "bold" }}>
        Caza tu fortuna del FUTURO... 
        ¡Elige una carta y descubre los secretos que te aguardan!
        </div>}
       

      </div>
    </>
  );
}

export default PickACard;
