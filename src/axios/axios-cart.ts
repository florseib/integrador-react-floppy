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