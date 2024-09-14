'use client'

import { useEffect, useState } from "react"
import ResultContent from "./result-content"
import { useTypingStore } from "@/store/typing-store"

const ResultCard = () => {
    const [isResult, setIsResult] = useState(false)
    const completedWordIds = useTypingStore((state) => state.completedWordIds);
    const totalTypingNum = completedWordIds.length

    useEffect(() => {
        setTimeout(() => setIsResult(true), 3000);
    }, []);

    return (
        <>
            {isResult ? (
                <ResultContent
                    totalTypingNum={totalTypingNum}
                />
            ) : (
                <p className="text-3xl font-semibold">
                    終了！
                </p>
            )}
        </>
    );
}
 
export default ResultCard;
