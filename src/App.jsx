import AppPageStyled from "./App.elements";
import image from "../src/assets/images/kero_logo.png";
import Form from "./components/Form/Form";

function App() {
  return (
    <AppPageStyled>
      <div className="content-container">
        <div className="text-container">
          <h1 className="main-title">SAKURA TAROT</h1>
        </div>
        <div className="image-container">
          <img className="kero-logo" src={image}></img>
        </div>
        <div className="text-container">
          <p>El poder de las cartas Clow te llama!</p>
          <p> Introduce tu nombre y desata tu magia!</p>
          <Form />
        </div>
      </div>
    </AppPageStyled>
  );
}

export default App;
