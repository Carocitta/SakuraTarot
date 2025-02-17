import { useEffect, useState } from "react"

const useUserName = () => {
    const [userNames, setUserNames] = useState([]);

    useEffect(() => {
        const storedNames = JSON.parse(localStorage.getItem("userNames")) || [];
        setUserNames(storedNames);
    }, []);

    useEffect(() => {
        localStorage.setItem("userNames", JSON.stringify(userNames));
    }, [userNames]);

    const addUserName = (newName) => {
        if (!userNames.includes(newName)) {
            setUserNames((prevNames) => [...prevNames, newName]);
        }
    };

    return { userNames, addUserName };
};

export default useUserName;