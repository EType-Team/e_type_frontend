'use client'

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface PlayCardProps {
    words: {
        id: number
        english: string
        japanese: string
        mp3Path: string
    }[]
}

const PlayCard = ({
    words
}: PlayCardProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [status, setStatus] = useState<string[]>([])
    const [correct, setCorrect] = useState(false)
    const inputRef = useRef("")

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key.length > 1) return

        inputRef.current += e.key
        const newInput = inputRef.current
        const targetText = words[currentIndex].english

        if (!targetText.startsWith(newInput)) {
            inputRef.current = inputRef.current.slice(0, -1)
            setStatus((prevStatus: string[]) => {
                const newStatus = [...prevStatus]
                newStatus[newInput.length - 1] = "red"
                return newStatus
            })
        } else {
            setStatus((prevStatus: string[]) => {
                const newStatus = [...prevStatus];
                newStatus[newInput.length - 1] = "green";
                return newStatus
            })
            if (newInput === targetText) {
                setCorrect(true)
                setTimeout(() => {
                    setCurrentIndex((current) => current + 1)
                    setCorrect(false)
                    inputRef.current = ""
                }, 1000)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        setStatus(Array(words[currentIndex].english.length).fill("black"))
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [currentIndex])

    return (
        <div className="flex flex-col items-center">
            <p className="text-5xl font-bold">
                {words[currentIndex].english.split("").map((char, index) => (
                    <span
                        key={index}
                        className={cn(
                            status[index] === 'red' && 'text-red-500',
                            status[index] === 'green' && 'text-green-500'
                        )}
                    >
                        {char}
                    </span>
                ))}
            </p>
            <p className="text-2xl">
                {correct && words[currentIndex].japanese}
            </p>
        </div>
    )
}
 
export default PlayCard