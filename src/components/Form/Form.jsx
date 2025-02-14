import { useState } from "react";
import { useNavigate } from "react-router";
import { FormContainer, Input, SubmitButton } from "./Form.elements";

const Form = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/pick-a-card");
    };
  
    return (
        <>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    maxLength={10} 
                    pattern="[A-Za-z]+" 
                    title="Por favor, ingresa solo letras (sin números ni espacios)."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                    onInvalid={(e) => {
                        if (!e.target.value) {
                            e.target.setCustomValidity("Este campo es obligatorio.");
                        } else {
                            e.target.setCustomValidity("Por favor, ingresa solo letras (sin números ni espacios).");
                        }
                    }}
                    onInput={(e) => e.target.setCustomValidity("")}
                />
                    <SubmitButton type="submit" >
                    <p className="butText">Descubre tu fortuna</p>
                    </SubmitButton>
                </form>
            </FormContainer>
        </>
    )
}

export default Form;