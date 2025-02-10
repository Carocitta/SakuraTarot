import Header from "./components/Header/Header";
// import Api from "./api/Api";
import AppPageStyled from "./AppStyled";
import image from "../src/assets/images/kero_logo.png";

function App() {
  return (
    <AppPageStyled>
      <Header />
      <h1 className="main-title">SAKURA TAROT</h1>
      <img className="kero-logo" src={image}></img>
      <p>El poder de las cartas Clow te llama!</p>
      <p> Introduce tu nombre y desata tu magia!</p>
      {/* <Api /> */}
    </AppPageStyled>
  );
}

export default App;
