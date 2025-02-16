import styled from "styled-components";

const AppPageStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  min-height: 100vh;

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: fit-content;

    @media screen and (max-width: 1024px) and (orientation: landscape) {
      flex-direction: row;
      align-items: center;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: auto;

    @media screen and (max-width: 1024px) and (orientation: landscape) {
      max-width: 80%;
    }
  }

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @media screen and (max-width: 1024px) and (orientation: landscape) {
      max-width: 80%;
    }
  }

  .kero-logo {
    max-width: 80%;
    height: auto;

    @media screen and (max-width: 1024px) and (orientation: landscape) {
      max-width: 60%;
    }
  }

  h1 {
    color: var(--brown);
    font-size: 3rem;
    padding: 10px;
    margin: 0.3em 0;

    @media screen and (max-width: 1024px) and (orientation: landscape) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.9rem;
    margin: 0.1em 0;

    @media screen and (max-width: 1024px) and (orientation: landscape) {
      font-size: 1.5rem;
    }
  }
`;

export default AppPageStyled;