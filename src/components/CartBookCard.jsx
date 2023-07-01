import {
  CardContent,
  CartBookInfo,
  CartButtonContainer,
  CartCard,
  ImageContainer,
} from "../StyledComponents/BookCardComponents";
import { useDispatch } from "react-redux";
import { addToCart, decreaseAmount } from "../redux-store/slice/CartSlice";

export const CartBookCard = ({
  name,
  author,
  price,
  category,
  picture,
  id,
  quantity,
}) => {
  const dispatch = useDispatch();

  return (
    <CartCard>
      <CardContent>
        <CartBookInfo>
          <h2>{name}</h2>
          <p>Autor: {author}</p>
          <p>Precio: ${price}</p>
          <p>Categoría: {category}</p>
          <p>
            Cantidad: <span>{quantity}</span>
          </p>
        </CartBookInfo>
        <CartButtonContainer>
          <button
            onClick={() =>
              dispatch(
                addToCart({ name, author, price, category, picture, id })
              )
            }
          >
            Agregar
          </button>
          <button onClick={() => dispatch(decreaseAmount(id))}>Quitar</button>
        </CartButtonContainer>
      </CardContent>
      <ImageContainer>
        <img src={picture}></img>
      </ImageContainer>
    </CartCard>
  );
};
