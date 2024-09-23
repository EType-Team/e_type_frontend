"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface LoadingNavigateButtonProps {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null
    url: string
    label: string
    loadingLabel: string

}

const LoadingNavigateButton = ({
    variant,
    url,
    label,
    loadingLabel
}: LoadingNavigateButtonProps) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handlePush = () => {
        setLoading(true)
        router.push(url)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    return (
        <Button
            variant={variant}
            onClick={handlePush}
            disabled={loading}
            className="relative flex items-center justify-center px-4 py-2"
        >
            {loading ? (
                <div className="flex items-center">
                    <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mr-2"></div>
                    <span>{loadingLabel}</span>
                </div>
            ) : (
                <span>{label}</span>
            )}
        </Button>
    )
}
 
export default LoadingNavigateButton