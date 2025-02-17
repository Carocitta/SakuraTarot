import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import ReadinPageStyled from "./ReadingPageStyled";
import Header from "../../components/Header/Header";
import decoration from "../../assets/images/decorative_underTitle.png";
import heartsDecoration from "../../assets/images/decorative_underCard.png";
import useUserName from "../../hooks/useUserName";

function ReadingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { past, present, future } = location.state || {};
  const { userName } = useUserName();
  const [cards, setCards] = useState({
    past: null,
    present: null,
    future: null,
  });
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

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

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const saveReading = async () => {
    if (!cards.past || !cards.present || !cards.future) {
      return;
    }

    const readingData = {
      date: new Date().toISOString(),
      username: userName || "Anónimo",
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
      navigate("/Historial");
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
            <img
              src={cards.past.sakuraCard}
              alt={cards.past.spanishName}
              className="card-image"
            />
            <div className="time-frame-container">
              <p className="time-frame">Pasado</p>
              <img src={decoration} alt="decoration" />
              <p className="card-name">{cards.past.spanishName}</p>
              <p className="card-meaning">{cards.past.meaning}</p>
            </div>
          </div>
        )}
        {cards.present && (
          <div className="card-container-middle">
            <img
              src={cards.present.sakuraCard}
              alt={cards.present.spanishName}
              className="card-image"
            />
            <div className="time-frame-container">
              <p className="time-frame">Presente</p>
              <img src={decoration} alt="decoration" />
              <p className="card-name">{cards.present.spanishName}</p>
              <p className="card-meaning">{cards.present.meaning}</p>
            </div>
          </div>
        )}
        {cards.future && (
          <div className="card-container">
            <img
              src={cards.future.sakuraCard}
              alt={cards.future.spanishName}
              className="card-image"
            />
            <div className="time-frame-container">
              <p className="time-frame">Futuro</p>
              <img src={decoration} alt="decoration" />
              <p className="card-name">{cards.future.spanishName}</p>
              <p className="card-meaning">{cards.future.meaning}</p>
            </div>
          </div>
        )}
      </div>
      <div className="button-quote-container">
        <p className="end-quote">
          Se termina el juicio. Yo, el juez Yue, {!isSmallScreen && <br />} le
          declaro su destino.
        </p>
        <img
          className="hearts"
          src={heartsDecoration}
          alt="decoration hearts"
        />
        <button className="save-reading-btn" onClick={saveReading}>
          Guardar mi destino
        </button>
      </div>
    </ReadinPageStyled>
  );
}

export default ReadingPage;
