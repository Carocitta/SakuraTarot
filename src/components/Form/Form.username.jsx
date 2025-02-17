import { useEffect, useState } from "react";

const userNameSaved = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem("userName");
        if (storedName) {
            setUserName(storedName);
        }
    }, []);
}
export default userNameSaved

//usar {userName} para llamar al nombre de usuario guardado!