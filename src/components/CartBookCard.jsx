import {
  CardContent,
  CartBookInfo,
  CartButtonContainer,
  CartCard,
  ImageContainer,
} from "../StyledComponents/BookCardComponents";
import { useDispatch } from "react-redux";
import { addToCart, decreaseAmount } from "../redux-store/slice/CartSlice";
import { useEffect, useState } from "react";
import { getBookById } from "../axios/axios-books";

export const CartBookCard = ({
  _id,
  quantity,
  email
}) => {
  const dispatch = useDispatch();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(_id).then(result => {
      setBook(result)
    })
  }, [])

  return (
    book && <CartCard>
      <CardContent>
        <CartBookInfo>
          <h2>{book.name}</h2>
          <p>Autor: {book.author}</p>
          <p>Precio: ${book.price}</p>
          <p>Categoría: {book.category}</p>
          <p>
            Cantidad: <span>{quantity}</span>
          </p>
        </CartBookInfo>
        <CartButtonContainer>
          <button
            onClick={() =>
              dispatch(
                addToCart({ _id, email })
              )
            }
          >
            Agregar
          </button>
          <button onClick={() => dispatch(decreaseAmount({_id, email}))}>Quitar</button>
        </CartButtonContainer>
      </CardContent>
      <ImageContainer>
        <img src={book.picture}></img>
      </ImageContainer>
    </CartCard>
  );
};
