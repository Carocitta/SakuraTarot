import AppPageStyled from "./AppStyled";
import image from "../../assets/images/kero_logo.png";


function App() {
  return (
    <AppPageStyled>
      <h1 className="main-title">SAKURA TAROT</h1>
      <img className="kero-logo" src={image}></img>
      <p>El poder de las cartas Clow te llama!</p>
      <p> Introduce tu nombre y desata tu magia!</p>
   
    </AppPageStyled>
  );
}

export default App;
