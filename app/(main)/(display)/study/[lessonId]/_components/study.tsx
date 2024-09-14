'use client'

import { useState } from "react"
import ReadyCard from "./ready-card"
import Timer from "./timer"
import PlayCard from "./play-card"
import ResultCard from "./result-card"
import { useTypingStore } from "@/store/typing-store"

interface StudyProps {
    label: string
    time: number
    cookie: string
    words: {
        id: number
        english: string
        japanese: string
        mp3Path: string
    }[]
}

const Study = ({
    label,
    time,
    cookie,
    words
}: StudyProps) => {
    const [isActive, setIsActive] = useState(0)
    const [onEnd, setOnEnd] = useState(0)
    const resetCompletedWords = useTypingStore((state) => state.resetCompletedWords);

    const handleStart = () => {
        resetCompletedWords();
        setIsActive(1);
    }
    
    return (
        <>
            <Timer 
                time={time}
                isActive={isActive === 1}
                onEnd={() => setOnEnd(1)}
            />
            {isActive === 0 && onEnd === 0 && (
                <ReadyCard
                    label={label}
                    time={time}
                    onStart={handleStart}
                />
            )}
            {isActive === 1 && onEnd === 0 && (
                <PlayCard
                    words={words}
                    cookie={cookie}
                />
            )}
            {isActive === 1 && onEnd === 1 && (
                <ResultCard
                    cookie={cookie}
                />
            )}
        </>
    )
}
 
export default Study