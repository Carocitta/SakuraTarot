import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import deleteIcon from "../../assets/images/delete-icon.png";
import modifyIcon from "../../assets/images/modify-icon.png";
import IconButton from "../../components/IconButton/IconButton";

function Historial() {
  const [savedReadings, setSavedReadings] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    fetchSavedReadings();
  }, []);

  const fetchSavedReadings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/savedCards");
      setSavedReadings(response.data);
    } catch (error) {
      console.error("Error al obtener las lecturas guardadas", error);
    }
  };

  const deleteSavedReading = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/savedCards/${id}`);
      setSavedReadings((prev) => prev.filter((reading) => reading.id !== id));
    } catch (error) {
      console.error("No se ha podido eliminar la lectura", error);
    }
  };

  const deleteAllReadings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/savedCards");
      const readings = response.data;

      await Promise.all(
        readings.map((reading) =>
          axios.delete(`http://localhost:3000/savedCards/${reading.id}`)
        )
      );
      setSavedReadings([]);
    } catch (error) {
      console.error("No se han podido eliminar las lecturas", error);
    }
  };

  const startEditing = (id, currentName) => {
    setEditingId(id);
    setNewUserName(currentName);
  };

  const saveEditedReading = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/savedCards/${id}`,
        { username: newUserName }
      );

      if (response.status === 200) {
        setSavedReadings((prev) =>
          prev.map((reading) =>
            reading.id === id ? { ...reading, username: newUserName } : reading
          )
        );
        setEditingId(null);
        setNewUserName("");
      } else {
        console.error("Error al actualizar la lectura en el backend");
      }
    } catch (error) {
      console.error("No se ha podido editar la lectura", error);
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

            {editingId === reading.id ? (
              <>
                <input
                  type="text"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
                <button onClick={() => saveEditedReading(reading.id)}>
                  Guardar
                </button>
                <button onClick={() => setEditingId(null)}>Cancelar</button>
              </>
            ) : (
              <>
                <IconButton
                  icon={modifyIcon}
                  actionOnclick={() =>
                    startEditing(reading.id, reading.username)
                  }
                />
                <p>Fecha: {new Date(reading.date).toUTCString()}</p>
                <p>{reading.username || "Sin nombre"}</p>
                <button onClick={deleteAllReadings}>
                  Eliminar todas las lecturas
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Historial;
