import { SERVER_URL } from "../constants"
import axios from "axios"

export const login = async (body) => {
    return await axios.post(SERVER_URL, body)
}
