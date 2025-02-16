import styled from 'styled-components';

const sharedStyles = `
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: var(--brown);

  @media (max-width: 1024px) and (orientation: landscape) {
    height: 3rem;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  ${sharedStyles}
  justify-content: space-between;
  padding: 0 20px;
  color: var(--yellow);

  @media (max-width: 1024px) and (orientation: landscape) {
    height: 100%; 
  }
`;

export const LogoContainer = styled.div`
  ${sharedStyles}
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 1024px) and (orientation: landscape) {
      height: 100%; 
    }

  .headerTitle {
  font-size: 2rem;
 
    @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  img {
    margin-right: 0.5rem;
    width: 80px;
    height: auto;

    @media (max-width: 1024px) and (orientation: landscape) {
      width: 50px;
    }
  }

  
`;

export const Menu = styled.ul`
  ${sharedStyles}
  list-style: none;
  margin-left: auto;

  @media (max-width: 768px) {
    
  }
`;

export const MenuItem = styled.li`
  height: 100%;
`;

export const MenuItemLink = styled.a`
  ${sharedStyles}
  justify-content: center;
  height: 100%;
  /* padding: 0.5rem 2.5rem; */
  padding-right: 5rem;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  text-decoration: none;
  color: inherit; 

  &:hover {
    font-weight: 700;
    background-color: var(--purple);
    border-radius: 10px;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    padding-right: 4.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding-right: 4rem;
  }
`;