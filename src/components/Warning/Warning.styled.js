import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  height: 40%;
  background-color: var(--lightpurple);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Message = styled.div`
  text-align: center;
  color: var(--black);
  padding: 2rem;
  background-color: var(--purple);
  border-radius: 8px;
  backdrop-filter: blur(5px);
`;
export { Overlay, Message }