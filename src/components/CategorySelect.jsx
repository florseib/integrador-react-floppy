import { useRef, useState } from "react";
import { categoryList } from "../data/BookList";
import Select from "react-select";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, wipeCatList } from "../redux-store/slice/CategorySlice";

export const CategorySelect = ({ children }) => {
  // const list = useSelector((state) => state.category);

  // const createCatList = () => {
  //   dispatch(wipeCatList());
  //   let categoryList = bookList.map((element) => element.category);
  //   categoryList = ["Todos", ...new Set(categoryList)];
  //   categoryList.forEach((cat) => {
  //     dispatch(addCategory({ value: cat, label: cat }));
  //   });
  // };

  // useEffect(() => {
  //   createCatList();
  // }, []);

  return (
    <Select options={categoryList} defaultValue={categoryList[0]}></Select>
  );
};
