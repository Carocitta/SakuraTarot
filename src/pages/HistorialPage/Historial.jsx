import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import deleteIcon from "../../assets/images/delete-icon.png";
import modifyIcon from "../../assets/images/modify-icon.png";
import IconButton from "../../components/IconButton/IconButton";
import useUserName from "../../hooks/useUserName";

function Historial() {
  const [savedReadings, setsavedReadings] = useState([]);

  useEffect(() => {
    const fetchSavedReadings = async () => {
      try {
        const response = await axios.get("http://localhost:3000/savedCards");
        setsavedReadings(response.data);
      } catch (error) {
        console.error("Error, no tiene ninguna lectura guardada", error);
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

  const deleteReading = async () => {
    try {
      const response = await axios.get("http://localhost:3000/savedCards");
      const readings = response.data;

      await Promise.all(
        readings.map((reading) =>
          axios.delete(`http://localhost:3000/savedCards/${reading.id}`)
        )
      );

      console.log("Todas las lecturas han sido eliminadas con éxito.");
      setsavedReadings([]); // Limpiar el estado de las lecturas
    } catch (error) {
      console.error("No se han podido eliminar las lecturas", error);
    }
  };
  // Modifica el username
  const modifySavedReading = async (id, updateData) => {
    try {
      await axios.patch(`http://localhost:3000/savedCards/${id}`, updateData);
      console.log("se edito correctamente");

      await Promise.all(
        readings.map((reading) =>
          axios.patch(`http://localhost:3000/savedCards/${reading.id}`)
        )
      );

      console.log("Todas las lecturas han sido eliminadas con éxito.");
      setsavedReadings([]); // Limpiar el estado de las lecturas
    } catch (error) {
      console.error("No se han podido editar las lecturas", error);
    }
  };

  const { userNames } = useUserName();

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
            <IconButton
              icon={modifyIcon}
              actionOnclick={() => modifySavedReading(reading.id)}
            />
            {new Date(reading.date).toUTCString()}
            {userNames.length > 0 && (
              <ul>
                {userNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* Corregimos el nombre de la función para que sea deleteReading */}
      <button onClick={deleteReading}>Eliminar todas las lecturas</button>
    </>
  );
}

export default Historial;
