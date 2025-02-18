import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import ReadinPageStyled from "./ReadingPageStyled";
import Header from "../../components/Header/Header";
import Popup from "../../components/Pop-up/Pop-up.jsx"; // Asegúrate de importar correctamente el componente
import decoration from "../../assets/images/decorative_underTitle.png";
import heartsDecoration from "../../assets/images/decorative_underCard.png";

function ReadingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { past, present, future } = location.state || {};
  const [cards, setCards] = useState({
    past: null,
    present: null,
    future: null,
  });

  // Estado para controlar la visibilidad del pop-up
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchedCard = async (id, type) => {
      try {
        const { data } = await axios.get(
          `https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/${id}`
        );
        setCards((prev) => ({ ...prev, [type]: data }));
      } catch (error) {
        console.error(`Error fetching ${type} card`, error);
      }
    };

    if (past) fetchedCard(past, "past");
    if (present) fetchedCard(present, "present");
    if (future) fetchedCard(future, "future");
  }, [past, present, future]);

  const saveReading = async () => {
    if (!cards.past || !cards.present || !cards.future) {
      return;
    }

    const readingData = {
      date: new Date().toISOString(),
      past: {
        name: cards.past.spanishName,
        image: cards.past.sakuraCard,
        meaning: cards.past.meaning,
      },
      present: {
        name: cards.present.spanishName,
        image: cards.present.sakuraCard,
        meaning: cards.present.meaning,
      },
      future: {
        name: cards.future.spanishName,
        image: cards.future.sakuraCard,
        meaning: cards.future.meaning,
      },
    };

    try {
      await axios.post("http://localhost:3000/savedCards", readingData);
      setIsPopupOpen(true); // Muestra el pop-up después de guardar
    } catch (error) {
      console.error("Error saving the reading:", error);
    }
  };

  return (
    <ReadinPageStyled>
      <Header />
      <div className="cards-container">
        {cards.past && (
          <div className="card-container">
            <img src={cards.past.sakuraCard} alt={cards.past.spanishName} className="card-image" />
            <div className="time-frame-container">
              <p className="time-frame">Pasado</p>
              <img src={decoration} />
              <p className="card-name">{cards.past.spanishName}</p>
              <p className="card-meaning">{cards.past.meaning}</p>
            </div>
          </div>
        )}
        {cards.present && (
          <div className="card-container-middle">
            <img src={cards.present.sakuraCard} alt={cards.present.spanishName} className="card-image" />
            <div className="time-frame-container">
              <p className="time-frame">Presente</p>
              <img src={decoration} />
              <p className="card-name">{cards.present.spanishName}</p>
              <p className="card-meaning">{cards.present.meaning}</p>
            </div>
          </div>
        )}
        {cards.future && (
          <div className="card-container">
            <img src={cards.future.sakuraCard} alt={cards.future.spanishName} className="card-image" />
            <div className="time-frame-container">
              <p className="time-frame">Futuro</p>
              <img src={decoration} />
              <p className="card-name">{cards.future.spanishName}</p>
              <p className="card-meaning">{cards.future.meaning}</p>
            </div>
          </div>
        )}
      </div>
      <div className="button-quote-container">
        <p className="end-quote">
          Se termina el juicio. Yo, el juez Yue, <br /> le declaro su destino.
        </p>
        <img className="hearts" src={heartsDecoration} alt="decoration hearts" />
        <button className="save-reading-btn" onClick={saveReading}>
          Guardar mi destino
        </button>
      </div>

      {/* Mostrar el pop-up solo si isPopupOpen es true */}
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <p>¡Tu destino ha sido guardado con éxito!</p>
          <button onClick={() => navigate("/Historial")}>Ver Historial</button>
          <button onClick={() => setIsPopupOpen(false)}>Cerrar</button>
        </Popup>
      )}
    </ReadinPageStyled>
  );
}

export default ReadingPage;
