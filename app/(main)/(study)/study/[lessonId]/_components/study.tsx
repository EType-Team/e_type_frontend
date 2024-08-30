'use client'

import { useState } from "react"
import ReadyCard from "./ready-card"
import Timer from "./timer"
import PlayCard from "./play-card"
import ResultCard from "./result-card"

interface StudyProps {
    label: string
    time: number
    words: {
        id: number
        english: string
        japanese: string
    }[]
}

const Study = ({
    label,
    time,
    words
}: StudyProps) => {
    const [isActive, setIsActive] = useState(0)
    const [onEnd, setOnEnd] = useState(0)
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
                    onStart={() => setIsActive(1)}
                />
            )}
            {isActive === 1 && onEnd === 0 && (
                <PlayCard
                    words={words}
                />
            )}
            {isActive === 1 && onEnd === 1 && (
                <ResultCard />
            )}
        </>
    )
}
 
export default Study