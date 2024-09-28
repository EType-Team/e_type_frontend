'use client'

import { useEffect, useState } from "react"
import ResultContent from "./result-content"
import { useTypingStore } from "@/store/typing-store"
import ResultTestContent from "./result-test-content"
import { useTestTypingStore } from "@/store/test-typing-store"

interface ResultCardProps {
    resultType: number
}

const ResultCard = ({
    resultType
}: ResultCardProps) => {
    const [isResult, setIsResult] = useState(false)
    const completedWordIds = useTypingStore((state) => state.completedWordIds)
    const correctWordIds = useTestTypingStore((state) => state.correctWordIds)
    const notCorrectWordIds = useTestTypingStore((state) => state.notCorrectWordIds)

    const totalTypingNum = completedWordIds.length
    const totalCorrectWordNum = correctWordIds.length
    const totalNotCorrectWordNum = notCorrectWordIds.length

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
                    <ResultTestContent
                        totalCorrectWordNum={totalCorrectWordNum}
                        totalNotCorrectWordNum={totalNotCorrectWordNum}
                    />
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
