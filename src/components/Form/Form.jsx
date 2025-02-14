import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { FormContainer, Input, SubmitButton } from "./Form.elements";

const Form = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const inputRef = useRef(null);
    
    const validateName = (name) => {
        if (!name.trim()) {
            return "Este campo es obligatorio.";
        }
        if (!/^[A-Za-z]+$/.test(name)) {
            return "Por favor, ingresa solo letras (sin números ni espacios).";
        }
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMessage = validateName(name);
        if (errorMessage) {
            setError(errorMessage);
            inputRef.current.focus();
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
                    ref={inputRef}
                    aria-describedby="name-error"
                    aria-invalid={!!error}
                />
                {error && <p id="name-error" className="errorText" role="alert" aria-live="assertive">
                    {error}
                </p>}
                <SubmitButton type="submit">
                    <p className="buttonText">Descubre tu fortuna</p>
                </SubmitButton>
            </form>
        </FormContainer>
    );
};

export default Form;