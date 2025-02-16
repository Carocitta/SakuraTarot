import axios from "axios";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import ReadinPageStyled from "./ReadingPageStyled";
import Header from "../../components/Header/Header";
import decoration from "../../assets/images/decorative_underTitle.png";
import heartsDecoration from "../../assets/images/decorative_underCard.png";

const ReadingPage = () => {
  const location = useLocation();
  const { past, present, future } = location.state || {};
  const [cards, setCards] = useState({
    past: null,
    prsent: null,
    future: null,
  });

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

  const saveReading = () => {
    const savedReading = JSON.parse(localStorage.getItem("favorite")) || [];
    const newReading = {
      past: cards.past,
      present: cards.present,
      future: cards.future,
    };

    localStorage.setItem(
      "favorite",
      JSON.stringify([...savedReading, newReading])
    );
    console.log(newReading);

    const currentDate = new Date();
    console.log(currentDate);
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
              /* width="150" */
              className="card-image"
            />
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
            <img
              src={cards.present.sakuraCard}
              alt={cards.present.spanishName}
              /* width="150" */
              className="card-image"
            />
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
            <img
              src={cards.future.sakuraCard}
              alt={cards.future.spanishName}
              /* width="150" */
              className="card-image"
            />
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
          Se termina el juicio. Yo, el juez Yue, le declaro su destino.
        </p>
        <img className="hearts" src={heartsDecoration} alt="decoration hearts" />
        <button className="save-reading-btn" onClick={saveReading}>
          Guardar mi destino
        </button>
      </div>
    </ReadinPageStyled>
  );
};

export default ReadingPage;
