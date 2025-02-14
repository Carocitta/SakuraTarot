import { useState } from "react";
import { useNavigate } from "react-router";
import { FormContainer, Input, SubmitButton } from "./Form.elements";

const Form = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const validateName = (name) => {
        if (!name.trim()) {
            return "Este campo es obligatorio.";
        }
        if (!/^[A-Za-zñç]+$/.test(name)) {
            return "Por favor, ingresa solo letras (sin números ni espacios).";
        }
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMessage = validateName(name);
        if (errorMessage) {
            setError(errorMessage);
            return;
        }
        setError(""); 
        navigate("/pick-a-card");
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    maxLength={10}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {error && <p className="errText">{error}</p>}
                <SubmitButton type="submit">
                    <p className="butText">Descubre tu fortuna</p>
                </SubmitButton>
            </form>
        </FormContainer>
    );
};

export default Form;