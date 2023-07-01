import { useDispatch } from "react-redux";
import { ButtonContainer } from "../StyledComponents/BookCardComponents.jsx";
import { BookInfo } from "../StyledComponents/BookCardComponents.jsx";
import {
  BookCardDiv,
  ImgContainer,
} from "../StyledComponents/BookCardComponents.jsx";
import { addToCart } from "../redux-store/slice/CartSlice.jsx";

export const StoreBookCard = ({
  name,
  author,
  price,
  category,
  picture,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <BookCardDiv>
      <ImgContainer>
        <img src={picture}></img>
      </ImgContainer>
      <BookInfo>
        <h2>{name}</h2>
        <p>Autor: {author}</p>
        <p>Precio: ${price}</p>
        <p>Categoría: {category}</p>
      </BookInfo>
      <ButtonContainer>
        <button
          value={id}
          onClick={() =>
            dispatch(addToCart({ name, author, price, category, picture, id }))
          }
        >
          Agregar al carrito
        </button>
      </ButtonContainer>
    </BookCardDiv>
  );
};
