"use client"

import { getCsrfToken } from "@/data/csrf";
import axios from "axios";
import { useEffect } from "react";

const CsrfProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    useEffect(() => {
        axios.defaults.withCredentials = true
        const setCsrfToken = async () => {
            const csrfToken = await getCsrfToken()
            axios.defaults.headers.common['X-CSRF-Token'] = csrfToken
        }
        setCsrfToken()
    }, [])
    return <>{children}</>;
}

export default CsrfProvider;