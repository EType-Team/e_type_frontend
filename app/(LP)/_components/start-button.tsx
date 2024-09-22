
"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

const StartButton = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleStart = () => {
        setLoading(true)
        setTimeout(() => {
            router.push("/dashboard")
        }, 500)
    }

    return (
        <Button
        variant="default"
        onClick={handleStart}
        disabled={loading}
        className={`relative flex items-center justify-center px-10 py-5 text-white rounded-full transition-transform transform hover:scale-105 
                    ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-blue-700"} 
                    hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 
                    shadow-lg`}
    >
        {loading ? (
            <div className="flex items-center">
                <div className="w-6 h-6 border-4 border-gray-300 border-t-white rounded-full animate-spin mr-2"></div>
                <span>読み込み中...</span>
            </div>
        ) : (
            <span>はじめる</span>
        )}
    </Button>
    
    )
}

export default StartButton
