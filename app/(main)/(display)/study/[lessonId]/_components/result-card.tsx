'use client'

import { useEffect, useState } from "react"
import ResultContent from "./result-content"

const ResultCard = () => {
    const [isResult, setIsResult] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsResult(true), 3000)
    }, [])

    return (
        <>
            {isResult ? (
                <ResultContent />
            ) : (
                <p className="text-3xl font-semibold">
                    終了！
                </p>
            )}
        </>
    );
}
 
export default ResultCard