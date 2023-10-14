import styled from "styled-components";
import { CategorySelect } from "../components/CategorySelect";
import { BookContainer } from "../StyledComponents/BookCardComponents";
import { StoreBookCard } from "../components/StoreBookCard";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, getFilteredBooks, getCategories } from "../axios/axios-books";

const StoreContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%
box-sizing: content-box
`;

export const Store = () => {
  const dispatch = useDispatch();
  const hasLoggedUser = useSelector((state) => state.user.loggedUser) != null;
  const categoryList = useSelector(state => state.category)
  const [selectValue, setSelectValue] = useState();
  const bookList = useSelector(state => state.bookList)

  useEffect(() => {
    getCategories(dispatch).then(result => {
      setSelectValue(result[0])
    })
  }, [])

  useEffect(() => {
    // if (!(bookList && bookList.length > 0)) {
      if (!selectValue || selectValue.value === "TODOS")
        getBooks(dispatch)
      else
        getFilteredBooks(dispatch, selectValue.value)
    // }
  }, [selectValue]);

  return (
    <StoreContainer>
      <h1>NUESTROS LIBROS</h1>
      {!hasLoggedUser && (
        <h3>
          Por favor, ingresá a tu cuenta o registrate para poder agregar libros
          a tu carrito
        </h3>
      )}
      <Select
        options={categoryList}
        defaultValue={categoryList[0]}
        onChange={(value) => setSelectValue(value)}
      ></Select>
      <BookContainer>
        {bookList.map((book) => {
          return <StoreBookCard {...book} key={book._id}></StoreBookCard>;
        })}
      </BookContainer>
    </StoreContainer>
  );
};
