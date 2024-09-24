'use client'

import { handleCurrectTyping } from "@/data/userWordProgress"
import { cn } from "@/lib/utils"
import { useSoundStore } from "@/store/sound-store"
import { useTypingStore } from "@/store/typing-store"
import { useEffect, useRef, useState } from "react"

interface PlayCardProps {
    cookie: string
    words: {
        id: number
        english: string
        japanese: string
        mp3Path: string
    }[]
}

const PlayCard = ({
    cookie,
    words
}: PlayCardProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [status, setStatus] = useState<string[]>([])
    const [correct, setCorrect] = useState(false)
    const inputRef = useRef("")

    const addCompletedWordId = useTypingStore((state) => state.addCompletedWordId)
    const soundEnabled = useSoundStore((state) => state.soundEnabled)

    const audioCache = useRef<Record<number, HTMLAudioElement>>({})

    useEffect(() => {
        words.forEach(word => {
            const audio = new Audio(word.mp3Path)
            audio.preload = "auto"
            audioCache.current[word.id] = audio
        })
    }, [words])

    const handleKeyPress = async (e: KeyboardEvent) => {
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
                const newStatus = [...prevStatus]
                newStatus[newInput.length - 1] = "green"
                return newStatus
            })
            if (newInput === targetText) {
                setCorrect(true)

                // サウンドが有効な場合にキャッシュされた音声を再生
                if (soundEnabled && audioCache.current[words[currentIndex].id]) {
                    audioCache.current[words[currentIndex].id].currentTime = 0 // 再生位置をリセット
                    audioCache.current[words[currentIndex].id].play().catch((error) => {
                        console.error("音声の再生中にエラーが発生しました:", error)
                    })
                }

                // handleCurrectTyping を非同期で呼び出し
                handleCurrectTyping(words[currentIndex].id, cookie).then(() => {
                    addCompletedWordId(words[currentIndex].id);
                }).catch(error => {
                    console.error("handleCurrectTyping 中にエラーが発生しました:", error)
                })

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
            <p className="text-2xl mt-2 font-semibold">
                {correct && words[currentIndex].japanese}
            </p>
        </div>
    )
}

export default PlayCard
