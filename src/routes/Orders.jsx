import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartContainer } from "../StyledComponents/CartComponents";
import { OrderCard } from "../components/OrderCard";
import { useState } from "react";

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
    
    useEffect(() => {
        GetOrdenes().then(result => {
            if(result.status == 201)
                setOrders(result.data)
        })
      }, [])

    return loggedUser != null ? (
      <OrdersDiv>
        <h1>TUS ÓRDENES</h1>
        <CartContainer>
          {orders.length !== 0 ? (
            orders.map((item) => {
              return <OrderCard {...item} key={item._id} />;
            })
          ) : (
            <p>Tu carrito se encuentra vacío actualmente.</p>
          )}
        </CartContainer>
      </OrdersDiv>
    ) : (
      <Navigate to={"/"} />
    );
  };