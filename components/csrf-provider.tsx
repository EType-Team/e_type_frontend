"use client"

import { CsrfToken } from "@/types";
import axios from "axios";
import { useEffect } from "react";

const CsrfProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    useEffect(() => {
        axios.defaults.withCredentials = true
        const getCsrfToken = async () => {
            const { data } = await axios.get<CsrfToken>(`${process.env.NEXT_PUBLIC_API_URL}/api/csrf`)
            axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token
        }
        getCsrfToken()
    }, [])
    return <>{children}</>;
}

export default CsrfProvider;