import axios from "axios";

export const getData = async () => {
    try {
        const respon = await axios.get(`${import.meta.env.VITE_API_URL}/users`)
        console.log(respon.data)
        return respon.data
    } catch (error) {
        console.log(error)
    }
} 