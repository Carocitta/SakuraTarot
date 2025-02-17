import { useEffect, useState } from "react";

const PickACard = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem("userName");
        if (storedName) {
            setUserName(storedName);
        }
    }, []);
}

//usar {userName} para llamar el nombre