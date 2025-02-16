import styled from "styled-components";

const ReadinPageStyled = styled.section`
  justify-items: stretch;
   @media (max-width: 1024px) and (orientation: landscape) {
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
      display: flex;
      flex-direction: row;
      gap: 10%;
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
  }

  .card-image {
    display: flex;
    align-items: center;

    @media (max-width: 1024px) and (orientation: landscape) {
      height: 20rem;
      width: 10rem;
      padding: 1rem;
      max-width: fit-content;
    }
  }

  .time-frame {
    color: #9083e3;
    font-size: 2rem;
    font-weight: bold;
    
    @media (max-width: 1024px) and (orientation: landscape) {
      font-size: 1.5rem;
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
      font-size: 1.2rem;
    }
  }

  .card-name {
    color: #795743;
    font-size: 1.5rem;
    font-weight: bold;

    @media (max-width: 1024px) and (orientation: landscape) { 
      font-size: 1.2rem;
    }
  }

  .card-meaning {
    font-size: 1.5rem;
    word-wrap: normal;

    @media (max-width: 1024px) and (orientation: landscape) {
      justify-content: center;  
      font-size: 1.2rem;
    }
  }

  .button-quote-container {
    position: absolute;
    bottom: 10%;
    left: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .end-quote {
    font-size: 2rem;

    @media (max-width: 1024px) and (orientation: landscape) {
      height: 50%;
      justify-content: center;  
      font-size: 1.5rem;
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
  }
`;
export default ReadinPageStyled;
