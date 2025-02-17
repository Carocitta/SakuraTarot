import { useEffect, useState } from "react"

const useUserName = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedName = locaalStorage.getItem("userName");
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