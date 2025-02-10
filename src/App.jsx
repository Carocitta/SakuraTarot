import Header from "./components/Header/Header";
import "./App.css";
import Api from "./api/Api";

function App() {
  return (
    <>
      <Header />
      <p> Pagina de INICIO</p>
      <h1>Datos traidos de API</h1>
      <Api />
    </>
  );
}

export default App;
