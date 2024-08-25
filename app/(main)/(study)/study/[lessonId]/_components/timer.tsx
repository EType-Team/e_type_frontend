'use client'

import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

interface TimerProps {
    time: number
    isActive: boolean
    onEnd: () => void
}

const Timer = ({
    time,
    isActive,
    onEnd
}: TimerProps) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (!isActive) return

        const updateInterval = 100
        const increment = 100 / (time / updateInterval)

        const intervalId = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(intervalId)
                    onEnd()
                    return 100
                }
                return prevProgress + increment
            })
        }, updateInterval)

        return () => clearInterval(intervalId)
    }, [isActive])


    return ( 
        <Progress value={progress} className="w-[60%] m-4" />
    )
}
 
export default Timer