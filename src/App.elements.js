import styled from "styled-components";

const AppPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .kero-logo {
    max-width: 40%;
    height: auto;
    padding: 5px;
  }

  h1 {
    color: var(--brown);
    font-size: 3rem;
    padding: 10px;
    margin-block-start: 0.3em;
    margin-block-end: 0.3em;
  }

   p {
    font-size: 1.9rem;
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
  }
   
`;
export default AppPageStyled;
