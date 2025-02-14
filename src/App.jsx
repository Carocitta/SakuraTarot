import AppPageStyled from "./App.elements";
import { OrientationWarning } from "./components/Warning/Warning";
import image from "../src/assets/images/kero_logo.png";
import Form from "./components/Form/Form";

function App() {
  return (
    <AppPageStyled>
      <OrientationWarning />
      <div className="content-container">
        <div className="title-container">
          <h1 className="main-title">SAKURA TAROT</h1>
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
