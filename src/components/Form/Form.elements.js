import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
  bottom: 4em;

  p.butText {
    font-size: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    justify-content: center;
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
`;
