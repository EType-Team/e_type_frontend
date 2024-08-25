'use client'

import { useState } from "react";
import ReadyCard from "./ready-card";
import Timer from "./timer";
import PlayCard from "./play-card";

interface StudyProps {
    label: string
    time: number
    words: {
        id: number
        english: string
        japanese: string
    }[];
}

const Study = ({
    label,
    time,
    words
}: StudyProps) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [onEnd, setOnEnd] = useState(0)
    return (
        <>
            <Timer 
                time={time}
                isActive={activeIndex === 1}
                onEnd={() => setOnEnd(1)}
            />
            {activeIndex === 0 && onEnd === 0 && (
                <ReadyCard
                    label={label}
                    time={time}
                    onStart={() => setActiveIndex(1)}
                />
            )}
            {activeIndex === 1 && onEnd === 0 && (
                <PlayCard
                    words={words}
                />
            )}
            {activeIndex === 1 && onEnd === 1 && (
                <>
                    終了!
                </>
            )}
        </>
    );
}
 
export default Study;