import { useSelector } from "react-redux";
import {
  BuyButtonContainer,
  CartContainer,
} from "../StyledComponents/CartComponents";
import { CartBookCard } from "../components/CartBookCard";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: content-box;
`;

export const Cart = () => {
  const loggedUser = useSelector((state) => state.user.loggedUser);
  let cart = useSelector((state) => state.cart.cartItems).filter(
    (x) => x.email == loggedUser.email
  );
  // cart.filter((x) => {
  //   x.email == loggedUser.email;
  // });
  return loggedUser != null ? (
    <CartDiv>
      <h1>TU CARRITO</h1>
      <CartContainer>
        {cart.length !== 0 ? (
          cart.map((item) => {
            return <CartBookCard {...item} key={item.id} />;
          })
        ) : (
          <p>Tu carrito se encuentra vacío actualmente.</p>
        )}
      </CartContainer>
      {cart.length !== 0 && (
        <BuyButtonContainer>
          <button type="submit" action="https://youtu.be/dQw4w9WgXcQ">
            Confirmar compra
          </button>
        </BuyButtonContainer>
      )}
    </CartDiv>
  ) : (
    <Navigate to={"/"} />
  );
};
