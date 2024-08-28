'use client'

import { useEffect, useState } from "react";
import ResultContent from "./result-content";

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
                <>
                    終了！
                </>
            )}
        </>
    );
}
 
export default ResultCard;