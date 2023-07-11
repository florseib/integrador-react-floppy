import { useDispatch, useSelector } from "react-redux";
import {
  HeaderDiv,
  Menu,
  LogoContainer,
  LinkContainer,
  AccountLinks,
  MenuIcon,
  Link,
} from "../StyledComponents/Components";
import { useEffect, useState } from "react";
import { logOut } from "../redux-store/slice/UserSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const cartItems = useSelector((state) => state.cart.cartItems).filter(
    (x) => x.email === loggedUser?.email
  );

  const [cartNumber, setCartNumber] = useState(0);

  useEffect(() => {
    setCartNumber(cartItems.length);
  }, [cartItems]);

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
          <Link to="/store">TIENDA</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/cart">CARRITO ({cartNumber})</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/login">LOG IN</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/register">REGISTRARSE</Link>
        </LinkContainer>
      </Menu>
      <AccountLinks>
        <LinkContainer>
          <Link to="/store">TIENDA</Link>
        </LinkContainer>
        {loggedUser !== null && (
          <LinkContainer>
            <Link to="/cart">CARRITO ({cartNumber})</Link>
          </LinkContainer>
        )}
        {loggedUser !== null && (
          <LinkContainer>
            <Link>{loggedUser.email}</Link>
          </LinkContainer>
        )}
        {loggedUser !== null && (
          <LinkContainer>
            <Link
              to="/"
              onClick={() => {
                dispatch(logOut());
              }}
            >
              LOG OUT
            </Link>
          </LinkContainer>
        )}
        {loggedUser === null && (
          <LinkContainer>
            <Link to="/login">LOG IN</Link>
          </LinkContainer>
        )}
        {loggedUser === null && (
          <LinkContainer>
            <Link to="/register">REGISTRARSE</Link>
          </LinkContainer>
        )}
      </AccountLinks>
      <MenuIcon>
        <FontAwesomeIcon icon={faBars} />
      </MenuIcon>
    </HeaderDiv>
  );
}
