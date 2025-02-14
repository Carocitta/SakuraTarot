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
    max-width: 1200px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .kero-logo {
    max-width: 60%;
    height: auto;
  }

  h1 {
    color: var(--brown);
    font-size: 3rem;
    padding: 10px;
    margin: 0.3em 0;
  }

  p {
    font-size: 1.9rem;
    margin: 0.1em 0;
  }

  @media screen and (max-width: 1024px) and (orientation: landscape) {
    .content-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .text-container {
      max-width: 50%;
      text-align: left;
      align-items: flex-start;
    }

    .image-container {
      max-width: 50%;
    }

    .kero-logo {
      max-width: 80%;
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

export default AppPageStyled;