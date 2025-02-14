import styled from "styled-components";

const ReadinPageStyled = styled.section`
  justify-items: center;

  .cards-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10%;
    width: 90%;
  }

  .card-container {
    display: flex;
    align-items: center;
    width: fit-content;
    height: fit-content;
  }

  .time-frame {
    color: #9083e3;
    font-size: 2rem;
    font-weight: bold;
  }

  .time-frame-container {
    display: flex;
    align-items: flex-start;
    margin-left: 10px;
    max-width: 210px;
    max-height: 351px;
    flex-direction: column;
    justify-content: center;
  }

  .card-name {
    color: #795743;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .card-meaning {
    font-size: 1.5rem;
    word-wrap: normal;
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
