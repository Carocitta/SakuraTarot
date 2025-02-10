import styled from "styled-components";

export const StyledCard = styled.div`
  height: 406px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${({ rotation }) => rotation})
    translateX(${({ shift }) => shift});
  transition: transform 0.3s ease;
  z-index: ${({ zIndex }) => zIndex};

  &:hover {
    transform: translate(-50%, -50%) scale(1.1)
      rotate(${({ rotation }) => rotation}) translateX(${({ shift }) => shift});
    z-index: 100; /* Bring to front on hover */
  }
  @media (max-width: 844px) and (orientation: landscape) {
    height: 60px;
  }
`;

export const CardHiddenImage = styled.img`
  @media (max-width: 844px) and (orientation: landscape) {
    height: 60px;
  }
`;
