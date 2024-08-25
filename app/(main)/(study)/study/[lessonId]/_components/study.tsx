'use client'

import { useState } from "react";
import ReadyCard from "./ready-card";
import Timer from "./timer";

interface StudyProps {
    label: string
    time: number
}

const Study = ({
    label,
    time
}: StudyProps) => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <>
            <Timer 
                time={time}
                isActive={activeIndex === 1}
            />
            {activeIndex === 1 ? (
                <div>
                    ここに英単語を表示させる
                </div>
            ): (
                <ReadyCard
                    label={label}
                    time={time}
                    onStart={() => setActiveIndex(1)}
                />
            )}
            
        </>
    );
}
 
export default Study;