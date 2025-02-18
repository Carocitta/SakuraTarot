import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
} from "./Header.styled";
import logo from "../../assets/images/kero.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <img src={logo} alt="Sakura Tarot Logo" />
          <p className="headerTitle"> SAKURA TAROT</p>
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
