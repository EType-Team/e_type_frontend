"use client"

import useUserWordProgressStore from "@/store/user-word-progress-store"
import { useRouter } from "next/navigation"
import { userError } from "./use-error"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useMutateAuth = () => {
    const router = useRouter()
    const resetEditedUserWordProgress = useUserWordProgressStore((state) => state.resetEditedUserWordProgress)
    const { switchErrorHandling } = userError()
    const logoutMutation = useMutation({
        mutationFn: async () =>
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/logout`),
        onSuccess: () => {
            resetEditedUserWordProgress()
            router.push('/auth/login')
        },
        onError: (err: any) => {
            if (err.response.data.message) {
                switchErrorHandling(err.response.data.message)
            } else {
                switchErrorHandling(err.response.data)
            }
        }
    })

    return { logoutMutation }
}