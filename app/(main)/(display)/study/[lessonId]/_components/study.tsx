'use client'

import { useState } from "react"
import ReadyCard from "./ready-card"
import Timer from "./timer"
import PlayCard from "./play-card"
import ResultCard from "./result-card"
import { useTypingStore } from "@/store/typing-store"
import SoundToggle from "@/components/sound-toggle"
import TestCard from "./test-card"
import { useTestTypingStore } from "@/store/test-typing-store"

interface StudyProps {
    label: string
    time: number
    cookie: string
    lessonId: number
}

const Study = ({
    label,
    time,
    cookie,
    lessonId,
    words
}: StudyProps) => {
    const [isActive, setIsActive] = useState(0)
    const { storedValue: lastLessonId, setValue: setLastLessonId, remove: removeLastLessonId } = useSessionStorage<number>('lastLessonId', 0)
    const { notCorrectWordIds, resetWordIds } = useWordSessionStorage()
    const isLastLessonId = (lessonId === lastLessonId) && notCorrectWordIds.length !== 0

    const handleStart = () => {
        resetWordIds()
        removeLastLessonId()
        setIsActive(1)
    }

    const handleTest = () => {
        resetWordIds()
        removeLastLessonId()
        setLastLessonId(lessonId)
        setIsActive(2)
    }

    const handleTimerEnd = useCallback(() => {
        setTimeout(() => {
            setOnEnd(true)
        }, 0)
    }, [])
    
    return (
        <>
            <Timer 
                time={time}
                isActive={isActive === 1 || isActive === 2}
                onEnd={handleTimerEnd}
            />
            {isActive === 0 && !onEnd && (
                <ReadyCard
                    label={label}
                    time={time}
                    isLastLessonId={isLastLessonId}
                    onStart={handleStart}
                    onTest={handleTest}
                />
            )}
            {isActive === 1 && !onEnd && (
                <PlayCard
                    words={words}
                    cookie={cookie}
                />
            )}
            {isActive === 2 && !onEnd && (
                <TestCard
                    words={words}
                    cookie={cookie}
                />
            )}
            {(isActive === 1 || isActive === 2) && onEnd && (
                <ResultCard
                    resultType={isActive}
                />
            )}
            <div className="absolute top-0 right-0 p-4">
                <SoundToggle />
            </div>
        </>
    )
}
 
export default Study