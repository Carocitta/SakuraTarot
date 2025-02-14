import AppPageStyled from "./App.elements";
import image from "../src/assets/images/kero_logo.png";
import Form from "./components/Form/Form";

function App() {
  return (
    <AppPageStyled>
      <h1 className="main-title">SAKURA TAROT</h1>
      <img className="kero-logo" src={image}></img>
      <p className="subtitle-1">El poder de las cartas Clow te llama!</p>
      <p className=""> Introduce tu nombre y desata tu magia!</p>
      <Form />
    </AppPageStyled>
  );
}

export default App;
