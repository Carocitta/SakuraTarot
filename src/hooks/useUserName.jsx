import { useEffect, useState } from "react"

const useUserName = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem("userName");
        if (storedName) {
            setUserName(storedName);
        }
    }, []);

    useEffect(() => {
        if(userName){
            localStorage.setItem("userName", userName);
        }
    },[userName]);

    const clearUserName = () => {
        localStorage.removeItem("userName");
        setUserName("");
    };

    return { userName, setUserName, clearUserName };
};

export default useUserName;

/* import useUserName from "../../hooks/useUserName"; // Import the hook

const History = () => {
    const { userName, clearUserName } = useUserName(); // Use the hook

    return (
        <div>
            <h2>Historial de Usuario</h2>
            {userName ? (
                <>
                    <p>Bienvenido de nuevo, <strong>{userName}</strong>!</p>
                    <button onClick={clearUserName}>Borrar Nombre</button>
                </>
            ) : (
                <p>No hay un usuario guardado.</p>
            )}
        </div>
    );
} */