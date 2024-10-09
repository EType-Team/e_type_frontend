'use client'

import { useEffect, useState } from "react"
import ResultContent from "./result-content"
import ResultTestContent from "./result-test-content"
import useWordSessionStorage from "@/hooks/use-word-session-storage"

interface ResultCardProps {
    resultType: number
}

const ResultCard = ({
    resultType
}: ResultCardProps) => {
    const [isResult, setIsResult] = useState(false)
    const {
        correctWordIds,
        notCorrectWordIds,
    } = useWordSessionStorage()

    const totalCorrectWordNum = correctWordIds.length
    const totalNotCorrectWordNum = notCorrectWordIds.length
    const totalTypingNum = totalCorrectWordNum + totalNotCorrectWordNum

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
