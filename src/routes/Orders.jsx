import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartContainer } from "../StyledComponents/CartComponents";
import { OrderCard } from "../components/OrderCard";
import { useEffect, useState } from "react";
import { GetOrdenes } from "../axios/axios-cart";

const OrdersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: content-box;
`;

export const Orders = () => {
  const navigate = useNavigate();

  const loggedUser = useSelector((state) => state.user.loggedUser);
  const [orders, setOrders] = useState([]);
  const [noOrders, setNoOrders] = useState(false);

  useEffect(() => {
    GetOrdenes(loggedUser).then(result => {
      console.log(result.data.orders)
      if (result.status == 201) {
        setOrders(result.data.orders)
        if (orders.length == 0)
          setNoOrders(true)
      }
      else if (result.status == 201) {
        alert("Su sesión ha caducado, por favor vuelva a ingresar.")
        dispatch(logOut());
        navigate("/");
      }
    })
  }, [])

  return loggedUser != null ? (
    <OrdersDiv>
      <h1>TUS ÓRDENES</h1>
      <CartContainer>
        {orders.length !== 0 && (
          orders.map((item) => {
            return <OrderCard {...item} key={item._id} />;
          })
        )}
        {noOrders && (
          <p>No has realizado ninguna orden hasta ahora.</p>
        )}
      </CartContainer>
    </OrdersDiv>
  ) : (
    <Navigate to={"/"} />
  );
};