import axios from "axios"
import { BASE_URL } from "../utils/variables"
import { createUser, logIn } from "../redux-store/slice/UserSlice";

export const PostRegister = async (userData) => {
    const data = await axios.post(`${BASE_URL}auth/register`, userData).catch((error) => {
        return error.response;
    });

    return data;
}

export const PostVerify = async (userData) => {
    const data = await axios.patch(`${BASE_URL}auth/verify`, userData).catch((error) => {
        return error.response;
    });
;

    return data;
}

export const PostLogin = async (dispatch, userData) => {
    const data = await axios.post(`${BASE_URL}auth/login`, userData).catch((error) => {
        return error.response;
    });

    if (data.status == 201)
        dispatch(logIn({
            email: data.data.usuario.email,
            id: data.data.usuario._id,
            token: data.data.token,
        }))

    return data;
}