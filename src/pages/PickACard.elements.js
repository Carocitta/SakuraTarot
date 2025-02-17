import styled from 'styled-components';

`.cardsPage{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 10rem;
}
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;  
  justify-content: flex-end;  
  padding: 7rem;
  font-size: 1.8rem;
  font-weight: initial;
  text-align: center;
  height: 100%;  
  margin-top: 7rem;

  @media (max-width: 1024px) and (orientation: landscape) {
    justify-content: center; 
    padding: 8rem;
    font-size: 1.4rem;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    justify-content: center; 
    padding: 2rem;
    font-size: 1.2rem;
  }
`;

export const Subtitle = styled.p`
width: 100%;
font-size: 1.5rem;
text-align: center;

@media (max-width: 1024px) and (orientation: landscape) {
    justify-content: center;  
    padding: 1px;
    font-size: 1.2rem;
  }

@media (max-width: 768px) and (orientation: landscape) {
    justify-content: center;  
    padding: 1px;
    font-size: 1rem;
  }
`;

