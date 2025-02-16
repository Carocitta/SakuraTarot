import styled from "styled-components";

const ReadinPageStyled = styled.section`
  justify-items: stretch;

  .cards-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0.5rem;
    gap: 8rem;
    margin-top: 5%;
    width: 90%;

    @media (max-width: 1024px) and (orientation: landscape) {
      gap: 10%;
    }

    @media (max-width: 768px) {
      align-items: center;
      gap: 2rem;
      width: 100%;
      margin-top: 5%;
    }
  }

  .card-container {
    display: flex;
    align-items: center;
    width: auto;
    height: fit-content;
    max-width: 15rem;

    @media (max-width: 1024px) and (orientation: landscape) {
      max-height: 60vh;
    }

    @media (max-width: 768px) {
      max-width: 10rem;
      height: auto;
    }
  }

  .card-container-middle {
    display: flex;
    align-items: center;
    width: auto;
    height: fit-content;
    max-width: 15rem;
    transform: translateY(-50px);

    @media (max-width: 1024px) and (orientation: landscape) {
      max-height: 60vh;
      transform: translateY(-25px);
    }

    @media (max-width: 768px) {
      transform: translateY(-15px);
      max-width: 10rem;
      height: auto;
    }
  }

  .card-image {
    display: flex;
    align-items: center;

    @media (max-width: 1024px) and (orientation: landscape) {
      height: 17rem;
      width: auto;
      padding: 0.1rem;
    }

    @media (max-width: 768px) {
      height: 14rem;
    }
  }

  .time-frame {
    color: var(--purple);
    font-size: 2rem;
    font-weight: bold;
    margin: inherit;
    padding-bottom: 0.3rem;
    
    @media (max-width: 1024px) and (orientation: landscape) {
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  .time-frame-container {
    display: flex;
    align-items: flex-start;
    padding-left: 0.9rem;
    max-width: 210px;
    max-height: 351px;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1024px) and (orientation: landscape) {
        
    }

    @media (max-width: 768px) {
        max-width: 180px;
        padding: 0.5rem;
    }
  }

  .card-name {
    color: var(--brown);
    font-size: 1.5rem;
    font-weight: bold;
  

    @media (max-width: 1024px) and (orientation: landscape) { 
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 0.1rem;
    }
  }

  .card-meaning {
    font-size: 1.5rem;
    word-wrap: normal;

    @media (max-width: 1024px) and (orientation: landscape) {
      justify-content: center;  
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .button-quote-container {
    position: relative;
    bottom: 7%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      bottom: 5%;
      width: 100%;
    }
  }

  .end-quote {
    font-size: 2rem;
    align-self: center;
    margin: 0;
    padding: 0.1rem;
    text-align: center;

    @media (max-width: 1024px) and (orientation: landscape) {
      height: 50%; 
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .hearts {
    display: flex;
    align-self: center;
    width: 70%;

    @media (max-width: 1024px) and (orientation: landscape) {
      width: 60%;
    }

    @media (max-width: 768px) {
      width: 50%;
    }
  }

  .save-reading-btn {
    border: none;
    background-color: inherit;
    display: inline-block;
    color: var(--purple);
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: underline;

    @media (max-width: 1024px) and (orientation: landscape) {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
export default ReadinPageStyled;
