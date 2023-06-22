import {
  HeaderDiv,
  Menu,
  LogoContainer,
  LinkContainer,
  AccountLinks,
  MenuIcon,
  Link,
} from "../StyledComponents/Components";
import { useState } from "react";

export function Header() {
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <HeaderDiv>
      <LogoContainer>
        {/* TODO: Este href hay que modificarlo para que funcione con routeo (como todos los href) */}
        <Link to="/">
          <img
            src="../../images/logo_trans.png"
            alt="Logo de la librería"
          ></img>
        </Link>
      </LogoContainer>
      <Menu>
        <LinkContainer>
          <Link to="/store"> TIENDA</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/login"> LOG IN</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/register">REGISTRARSE</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/cart">CARRITO ({cartNumber})</Link>
        </LinkContainer>
      </Menu>
      <AccountLinks>
        <LinkContainer>
          <Link to="/store"> TIENDA</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/login"> LOG IN</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/register">REGISTRARSE</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/cart">CARRITO ({cartNumber})</Link>
        </LinkContainer>
      </AccountLinks>
      <MenuIcon>
        <i className={"fa-solid fa-bars"}></i>
      </MenuIcon>
    </HeaderDiv>
  );
}
