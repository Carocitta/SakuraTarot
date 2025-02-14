import styled from "styled-components";

const IconButtonStyled = styled.button`
  background-color: var(--purple);
  height: 50px;
  width: 50px;
  border-radius: 50%;

  &:active {
    background-color: var(--brown);
  }

  .icon-image {
    //pointer-events: none;
  }
`;

export default IconButtonStyled;
