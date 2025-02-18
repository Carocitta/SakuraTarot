import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  padding: 0.4em;
  border-radius: 5px;
  margin: 0.1em;
  bottom: 4em;
  
  p.buttonText{
    font-size: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    justify-content: center;
   
    @media screen and (max-width: 768px) and (orientation: landscape) {
      font-size: 1.2rem;
    }
  }
    
  p.errorText{
    font-size: 0.8rem;
    color: red;
  }
`;

export const Input = styled.input`
  display: flex;
  text-align: center;
  font-size: x-large;
  width: 100%;
  height: 3.5rem;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid;
  border-color: var(--black);
  border-radius: 4px;

  @media screen and (max-width: 1024px) and (orientation: landscape) {
    height: 3.4rem;
  }
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    height: 3rem;
    font-size: large;
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--purple);
  width: 100%;
  height: 3.5rem;
  color: var(--white);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--lightpurple);
  }

  @media screen and (max-width: 1024px) and (orientation: landscape) {
    height: 3.4rem;
  }

  @media screen and (max-width: 768px) and (orientation: landscape) {
    height: 3rem;
  }
`;
