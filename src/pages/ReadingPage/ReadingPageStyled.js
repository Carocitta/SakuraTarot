import styled from "styled-components";

const ReadinPageStyled = styled.section`
  padding: 20px;

  .cards-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 15%;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .time-frame {
    color: #9083e3;
    font-size: 2rem;
  }

  .time-frame-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }

  .card-name {
    color: #795743;
    font-size: 1.5rem;
  }
  .card-meaning {
    font-size: 1.5rem;
  }

  .button-quote-container {
    position: absolute;
    bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .end-quote {
    font-size: 2rem;
  }

  .save-readin-btn {
    border: none;
    background-color: inherit;
    display: inline-block;
    color: #9083e3;
    font-size: 1.5rem;
  }
`;
export default ReadinPageStyled;
