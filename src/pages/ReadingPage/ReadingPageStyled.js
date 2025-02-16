import styled from "styled-components";

const ReadinPageStyled = styled.section`
  justify-items: stretch;

   @media (max-width: 1024px) and (orientation: landscape) {
      justify-items: center;
    }

    @media (max-width: 768px) {
      justify-items: center;
    }

  .cards-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0.5rem;
    gap: 8rem;
    margin-top: 8%;
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
      max-width: 12rem;
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
      transform: translateY(-10px);
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
    padding: 1rem;
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
      font-size: 1.1rem;
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
      font-size: 1rem;
    }
  }

  .button-quote-container {
    bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      bottom: 5%;
      text-align: center;
      width: 100%;
    }
  }

  .end-quote {
    font-size: 2rem;
    align-self: center;

    @media (max-width: 1024px) and (orientation: landscape) {
      height: 50%; 
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  .hearts {
    display: flex;
    align-self: center;
    width: 60%;

    @media (max-width: 768px) {
      width: 50%;
    }
  }

  .save-reading-btn {
    border: none;
    background-color: inherit;
    display: inline-block;
    color: #9083e3;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: underline;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
`;
export default ReadinPageStyled;
