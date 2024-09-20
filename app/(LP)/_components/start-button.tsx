"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
        >
            {loading ? (
                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-10">
                    <div className="loader"></div>
                </div>
            ) : (
                <p>はじめる</p>
            )}
        </Button>
    )
}
 
export default StartButton;