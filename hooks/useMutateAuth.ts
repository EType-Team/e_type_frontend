import useUserWordProgressStore from "@/store/user-word-progress-store"
import { useRouter } from "next/navigation"
import { userError } from "./useError"
import { useMutation } from "@tanstack/react-query"
import { Credential } from "@/types"
import axios from "axios"

export const useMutateAuth = () => {
    const router = useRouter()
    const resetEditedUserWordProgress = useUserWordProgressStore((state) => state.resetEditedUserWordProgress)
    const { switchErrorHandling } = userError()
    const loginMutation = useMutation({
        mutationFn: async (user: Credential) => 
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, user),
        onSuccess: () => {
            router.push('/dashboard')
        },
        onError: (err: any) => {
            if (err.response.data.message) {
                switchErrorHandling(err.response.data.message)
            } else {
                switchErrorHandling(err.response.data)
            }
        }
    })
    const registerMutation = useMutation({
        mutationFn: async (user: Credential) =>
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/signup`, user),
        onError: (err: any) => {
            if (err.response.data.message) {
                switchErrorHandling(err.response.data.message)
            } else {
                switchErrorHandling(err.response.data)
            }
        }
    })
    const logoutMutation = useMutation({
        mutationFn: async () =>
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`),
        onSuccess: () => {
            resetEditedUserWordProgress()
            router.push('/')
        },
        onError: (err: any) => {
            if (err.response.data.message) {
                switchErrorHandling(err.response.data.message)
            } else {
                switchErrorHandling(err.response.data)
            }
        }
    })

    return { loginMutation, registerMutation, logoutMutation }
}