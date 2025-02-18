import styled from "styled-components";

const IconButtonStyled = styled.button`
  background-color: var(--purple);
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin: 0.4rem;
   
  @media (max-width: 1024px) and (orientation: landscape) {
    height: 2.8rem;
    width: 2.8rem;
    }

  @media (max-width: 768px) {
    height: 2rem;
    width: 2rem;
    }

  &:active {
    background-color: var(--brown);
  }

  .icon-image {
    display: flex;
    align-self: center;
    justify-content: center;
  }`
;

export default IconButtonStyled;