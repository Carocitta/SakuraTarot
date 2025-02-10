import AppPageStyled from "./AppStyled";
import image from "../../assets/images/kero_logo.png";
import IconButton from "../IconButton/IconButton";
import deleteIcon from "../../assets/images/delete-icon.png";
import modifyIcon from "../../assets/images/modify-icon.png";

function App() {
  return (
    <AppPageStyled>
      <h1 className="main-title">SAKURA TAROT</h1>
      <img className="kero-logo" src={image}></img>
      <p>El poder de las cartas Clow te llama!</p>
      <p> Introduce tu nombre y desata tu magia!</p>
      <IconButton icon={deleteIcon} />
      <IconButton icon={modifyIcon} />
    </AppPageStyled>
  );
}

export default App;
