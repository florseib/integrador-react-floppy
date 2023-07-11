import styled from "styled-components";
import { CategorySelect } from "../components/CategorySelect";
import { BookContainer } from "../StyledComponents/BookCardComponents";
import { bookList } from "../data/BookList";
import { StoreBookCard } from "../components/StoreBookCard";
import { categoryList } from "../data/BookList";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
  const hasLoggedUser = useSelector((state) => state.user.loggedUser) != null;
  const [selectValue, setSelectValue] = useState(categoryList[0]);
  const [filteredBookList, setFilteredBookList] = useState([]);

  const filterBookList = () => {
    // if (selectValue.value === 'Todos') return bookList;

    // return bookList.filter((x) => x.category === selectValue.value);

    setFilteredBookList([]);

    bookList.forEach((book) => {
      if (selectValue.value === "Todos" || selectValue.value === book.category)
        // filteredBookList.push(book);
        setFilteredBookList((oldArray) => [...oldArray, book]);
    });
  };

  useEffect(() => {
    filterBookList();
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
        {filteredBookList.map((book) => {
          return <StoreBookCard {...book} key={book.id}></StoreBookCard>;
        })}
      </BookContainer>
    </StoreContainer>
  );
};
