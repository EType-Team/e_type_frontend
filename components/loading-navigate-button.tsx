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
        setTimeout(() => {
            router.push(url)
        }, 1000)
    }

    return (
        <Button
            variant={variant}
            onClick={handlePush}
            disabled={loading}
            className={`relative flex items-center justify-center px-10 py-5 text-white rounded-full transition-transform transform hover:scale-105 
                        ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-blue-700"} 
                        hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 
                        shadow-lg hover:text-white`}
        >
            {loading ? (
                <div className="flex items-center">
                    <div className="w-6 h-6 border-4 border-gray-300 border-t-white rounded-full animate-spin mr-2"></div>
                    <span>{loadingLabel}</span>
                </div>
            ) : (
                <span>{label}</span>
            )}
        </Button>
    )
}

export default LoadingNavigateButton