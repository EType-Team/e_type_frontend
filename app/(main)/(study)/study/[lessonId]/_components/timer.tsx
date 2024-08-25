'use client'

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const Timer = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const totalDuration = 120000
        const updateInterval = 100
        const increment = 100 / (totalDuration / updateInterval)

        const intervalId = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(intervalId)
                    return 100
                }
                return prevProgress + increment
            });
        }, updateInterval)

        return () => clearInterval(intervalId)
    }, []);

    return ( 
        <Progress value={progress} className="w-[60%] m-4" />
     );
}
 
export default Timer;