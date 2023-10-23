import axios from "axios"
import { BASE_URL } from "../utils/variables"

export const ConfirmarCompra = async (deliveryData, token) => {
    const data = await axios.post(`${BASE_URL}ordenes`, deliveryData, {
        headers: {
            'x-token': token
        }
    }).catch((error) => {
        return error.response;
    });

    return data;
}

export const GetOrdenes = async (loggedUser) => {
    const data = await axios.get(`${BASE_URL}ordenes`, {
        headers: {
            'x-token': loggedUser.token
        }
    }).catch((error) => {
        return error.response;
    });

    // setState(data.data);

    return data;
}