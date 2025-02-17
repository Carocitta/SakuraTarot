import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import deleteIcon from "../../assets/images/delete-icon.png";
import modifyIcon from "../../assets/images/modify-icon.png";
import IconButton from "../../components/IconButton/IconButton";

function Historial() {
  const [savedReadings, setsavedReadings] = useState([]);

  useEffect(() => {
    const fetchSavedReadings = async () => {
      try {
        const response = await axios.get("http://localhost:3000/savedCards");
        setsavedReadings(response.data);
      } catch (error) {
        console.error("Error,no tiene ninguna lectura guardada", error);
      }
    };
    fetchSavedReadings();
  }, []);

  const deleteSavedReading = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/savedCards/${id}`);
      setsavedReadings((previousReadings) =>
        previousReadings.filter((reading) => reading.id !== id)
      );
    } catch (error) {
      console.error("No se ha podido eliminar su lectura", error);
    }
  };
  const deleteAll = async () => {
    try {
      await axios.delete(`http://localhost:3000/savedCards`);
    } catch (error) {
      console.error("No se han podido eliminar todas las lecturas", error);
    }
  };

  return (
    <>
      <Header />
      <ul>
        {savedReadings.map((reading) => (
          <li key={reading.id}>
            <IconButton
              icon={deleteIcon}
              actionOnclick={() => deleteSavedReading(reading.id)}
            />
            <IconButton icon={modifyIcon} />
            {new Date(reading.date).toUTCString()}
          </li>
        ))}
        <button onClick={deleteAll}>Eliminar todas las lecturas</button>
      </ul>
    </>
  );
}

export default Historial;
