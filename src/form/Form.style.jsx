import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202027;
  width: 400px;
  heigth: 25%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  margin: 10px;
  position:relative;
  bottom:4em;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    position:relative;
    top: 2em;
  }
`;
