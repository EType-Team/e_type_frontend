"use client"

import { useEffect, useState } from "react"
import { UserWordProgress } from "@/types"
import { Progress } from "@/components/ui/progress"

interface WordProgressItemProps {
    userWordProgress: UserWordProgress
}

const WordProgressItem = ({ userWordProgress }: WordProgressItemProps) => {
    const [progressValue, setProgressValue] = useState(0)

    useEffect(() => {
        let start = 0
        const end = userWordProgress.proficiency
        const duration = 500

        const increment = end / (duration / 8)
        const animateProgress = () => {
            if (start < end) {
                start += increment
                setProgressValue(start < end ? start : end)
                requestAnimationFrame(animateProgress)
            }
        };

        requestAnimationFrame(animateProgress)
    }, [userWordProgress.proficiency])

    return (
        <div className="flex justify-between items-center">
            <div className="p-1 mx-4">
                <p className="font-medium text-xl">{userWordProgress.word.english}</p>
                <p className="font-light text-sm">{userWordProgress.word.japanese}</p>
            </div>
            <Progress value={progressValue} className="w-[200px] mx-4" />
        </div>
    );
};

export default WordProgressItem;
