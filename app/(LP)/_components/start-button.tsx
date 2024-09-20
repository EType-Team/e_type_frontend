"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

const StartButton = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleStart = () => {
        setLoading(true)
        router.push("/dashboard")
    }

    return (
        <Button
            variant="outline"
            onClick={handleStart}
            disabled={loading}
            className="relative flex items-center justify-center px-4 py-2"
        >
            {loading ? (
                <div className="flex items-center">
                    <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mr-2"></div>
                    <span>読み込み中...</span>
                </div>
            ) : (
                <span>はじめる</span>
            )}
        </Button>
    )
}

export default StartButton
