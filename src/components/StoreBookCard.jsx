import { useDispatch, useSelector } from "react-redux";
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
  _id,
}) => {
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const dispatch = useDispatch();

  return (
    <BookCardDiv>
      <ImgContainer isLogged={loggedUser != null}>
        <img src={picture}></img>
      </ImgContainer>
      <BookInfo isLogged={loggedUser != null}>
        <h2>{name}</h2>
        <p>Autor: {author}</p>
        <p>Precio: ${price}</p>
        <p>Categoría: {category}</p>
      </BookInfo>
      {loggedUser && (
        <ButtonContainer>
          <button
            value={_id}
            onClick={() =>
              dispatch(
                addToCart({
                  _id,
                  email: loggedUser.email,
                })
              )
            }
          >
            Agregar al carrito
          </button>
        </ButtonContainer>
      )}
    </BookCardDiv>
  );
};
