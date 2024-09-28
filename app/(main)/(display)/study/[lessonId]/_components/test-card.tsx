import { cn } from "@/lib/utils"
import { useSoundStore } from "@/store/sound-store"
import { useEffect, useRef, useState } from "react"

interface TestCardProps {
    cookie: string
    words: {
        id: number
        english: string
        japanese: string
        mp3Path: string
    }[]
}

const TestCard = ({
    cookie,
    words
}: TestCardProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const [correct, setCorrect] = useState<boolean>()
    const [ansWord, setAnsWord] = useState("")

    const soundEnabled = useSoundStore((state) => state.soundEnabled)
    const audioCache = useRef<Record<number, HTMLAudioElement>>({})
    useEffect(() => {
        words.forEach(word => {
            const audio = new Audio(word.mp3Path)
            audio.preload = "auto"
            audioCache.current[word.id] = audio
        })
    }, [words])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    })

    const handleKeyPress = async (e: KeyboardEvent) => {
        const keyValue = e.key.valueOf()
        if (keyValue == 'Backspace') {
            setInputValue(prev => prev.slice(0, -1))
        }

        if (keyValue == 'Enter') {
            if (soundEnabled && audioCache.current[words[currentIndex].id]) {
                audioCache.current[words[currentIndex].id].currentTime = 0
                audioCache.current[words[currentIndex].id].play().catch((error) => {
                    console.error("音声の再生中にエラーが発生しました:", error)
                })
            }
            if (words[currentIndex].english !== inputValue) {
                setCorrect(false)
                setAnsWord(words[currentIndex].english)
            } else {
                setCorrect(true)
                // Data fetch API
            }

            setTimeout(() => {
                setCurrentIndex((current) => current + 1)
                setAnsWord("")
                setInputValue("")
                setCorrect(undefined) 
            }, 1000)
        }

        if (e.key.length > 1) return

        setInputValue(prev => prev + e.key)
    }
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center w-full">
                <p className={cn(
                    "text-5xl font-bold w-fit mx-auto",
                    correct === true ? "text-green-500" : correct === false ? "text-red-500" : "text-black"
                )}>
                    {inputValue}
                    <span className="animate-blink inline-block w-[1px] h-[0.8em] bg-black align-bottom"></span>
                </p>
            </div>
            <p className="m-2 text-sm text-slate-500">
                エンターで回答
            </p>
            <p className="text-xl mt-2 font-semibold">
                {words[currentIndex].japanese}
            </p>
            <p className="text-5xl font-bold text-slate-500">
                {ansWord ? ansWord : ""}
            </p>
        </div>
    )
}
 
export default TestCard