import axios from 'axios';
import { BASE_URL } from '../utils/variables';
import { loadBooks } from '../redux-store/slice/BookSlice';
import { loadList } from '../redux-store/slice/CategorySlice';

export const getBooks = async (dispatch) => {
    const data = await axios.get(`${BASE_URL}libros`);

    if (data) {
        dispatch(loadBooks(data.data.libros));
    }
}

export const getFilteredBooks = async (dispatch, categoria: string) => {
    const data = await axios.get(`${BASE_URL}libros/categoria/${categoria}`);

    if (data) {
        dispatch(loadBooks(data.data.libros));
    }
}

export const getBookById = async (id: string) => {
    const data = await axios.get(`${BASE_URL}libros/libro/${id}`);

    if (data) {
        return data.data.libro;
    }

}

export const getCategories = async (dispatch) => {
    const data = await axios.get(`${BASE_URL}libros/categorias`);

    const catList = [{value: "TODOS", label: "TODOS"}];

    data.data.categorias.forEach(element => {
        catList.push({value: element.descripcion, label: element.descripcion})
    });

    if (data) {
        dispatch(loadList(catList));
    }

    return catList;
}