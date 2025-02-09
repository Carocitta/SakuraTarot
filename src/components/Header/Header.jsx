import React from "react";
import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
} from "./Header.elements";
import logo from "../../assets/kero.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <img src={logo} alt="Sakura Tarot Logo" />
          <p> SAKURA TAROT</p>
        </LogoContainer>

        <Menu>
          <MenuItem>
            <MenuItemLink as={Link} to="/">
              Inicio
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink as={Link} to="/historial">
              Historial
            </MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Header;

