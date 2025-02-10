import Header from "./components/Header/Header";
import "./App.css";
import Api from "./api/Api";
import Form from './form/Form'

function App() {
  return (
    <>
      <Header />
      <p> Pagina de INICIO</p>
      <h1>Datos traidos de API</h1>
      <Api />
      <Form />
    </>
  );
}

export default App;
