'use client'

import { useEffect, useState } from "react";

const ResultCard = () => {
    const [isResult, setIsResult] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsResult(true), 3000)
    }, [])

    return (
        <>
            {isResult ? (
                <>
                    結果の表示
                </>
            ) : (
                <>
                    終了！
                </>
            )}
        </>
    );
}
 
export default ResultCard;