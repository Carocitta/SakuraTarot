import styled from 'styled-components';


export const Title = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;  
  align-items: center;  
  justify-content: flex-end;  
  padding: 120px;
  font-size: 1.8rem;
  font-weight: medium;
  text-align: center;
  height: 100%;  
  margin-top: 7rem;


  @media (max-width: 767px) and (orientation: landscape) {
    height: 50%;
    margin-top: 2rem;
    justify-content: center;  
    padding: 12px;
    font-size: 1.2rem;
  }
`;

export const Subtitle = styled.p`
width: 100%;
font-size: 1.5rem;
text-align: center;

@media (max-width: 767px) and (orientation: landscape) {
    height: 50%;
justify-content: center;  
    padding: 1px;
    font-size: 1rem;
  }
`;
