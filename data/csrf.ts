import { CsrfToken } from "@/types"
import axios from "axios"

export const getCsrfToken = async () => {
    const { data } = await axios.get<CsrfToken>(`${process.env.NEXT_PUBLIC_API_URL}/csrf`)
    return data.csrf_token
}