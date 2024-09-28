'use client'

import { useEffect, useState } from "react"
import ResultContent from "./result-content"
import { useTypingStore } from "@/store/typing-store"
import ResultTestContent from "./result-test-content"

interface ResultCardProps {
    resultType: number
}

const ResultCard = ({
    resultType
}: ResultCardProps) => {
    const [isResult, setIsResult] = useState(false)
    const completedWordIds = useTypingStore((state) => state.completedWordIds);
    const totalTypingNum = completedWordIds.length

    useEffect(() => {
        setTimeout(() => setIsResult(true), 3000);
    }, []);

    return (
        <>
            {isResult ? (
                resultType === 1 ? (
                    <ResultContent
                        totalTypingNum={totalTypingNum}
                    />
                ) : resultType === 2 ? (
                    <ResultTestContent />
                ) : null
            ) : (
                <p className="text-3xl font-semibold">
                    終了！
                </p>
            )}
        </>
    );
}
 
export default ResultCard;
