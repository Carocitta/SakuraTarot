import { FormContainer } from "./Form.style";

const Form = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Formulario enviado");
    };
  
    return (
        <>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <Input type="text" maxLength={10} pattern="[A-Za-z]"
                        title="Por favor, ingresa tu nombre"
                        onChange={(e) => {
                            const valor = e.target.value;
                            if (!/^[A-Za-z]+$/.test(valor)) {
                                console.log("Solo se permiten letras");
                            }
                        }} id="name" name="name" required />
                    <SubmitButton type="submit" autoFocus>
                    Descubre tu fortuna
                    </SubmitButton>
                </form>
            </FormContainer>
        </>
    )
}
export default Form;