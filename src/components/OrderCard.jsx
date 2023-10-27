import {
  CardContent,
  CartBookInfo,
  CartButtonContainer,
  CartCard,
  ImageContainer,
  OrderCardContainer,
} from "../StyledComponents/BookCardComponents";
import { useDispatch } from "react-redux";
import { addToCart, decreaseAmount } from "../redux-store/slice/CartSlice";
import { useEffect, useState } from "react";
import { getBookById } from "../axios/axios-books";
import styled from "styled-components";

const List = styled.ul`
  margin: 4px 0;
`

const Span = styled.span`
  margin: 4px 0;
`

export const OrderCard = ({
  detallesEnvio,
  envio,
  fecha,
  estatus,
  items
}) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getBookById(_id).then(result => {
  //     setBook(result)
  //   })
  // }, [])

  return (
    <OrderCardContainer>
      <CardContent>
        <CartBookInfo>
          <Span><b>Fecha:</b> {fecha.tos}</Span>
          <Span><b>Libros:</b></Span>
          <List>
            {items.map((item) => {
              return <li key={item._id}>{item.libro.name} (Precio: ${item.libro.precio}, Cantidad: {item.cantidad})</li>
            })}
          </List>
          <Span><b>Dirección:</b> {detallesEnvio.direccion}, {detallesEnvio.ciudad} {detallesEnvio.codigoPostal}</Span>
          <Span><b>Nombre:</b> {detallesEnvio.nombre}</Span>
          <Span><b>Dirección:</b> {detallesEnvio.telefono}</Span>
          <Span><b>Total:</b> ${envio + items.reduce((accum, value) => {return accum + value.libro.price}, 0)}</Span>
          <Span><b>Status:</b> {estatus}</Span>
        </CartBookInfo>
      </CardContent>
    </OrderCardContainer>
  );
};
