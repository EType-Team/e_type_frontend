'use client'

import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

interface ReadyCardProps {
    label: string
    time: number
    isLastLessonId: boolean
    onStart: () => void
    onTest: () => void
}

const ReadyCard = ({
    label,
    time,
    isLastLessonId,
    onStart,
    onTest
}: ReadyCardProps) => {
    return (
        <div className="flex flex-col items-center gap-y-10">
            <p>{label}</p>
            <p>制限時間{time / 60000}分</p>
            <div className="relative">
                {isLastLessonId && (
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <div
                                className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-yellow-500 rounded-full hover:cursor-pointer"
                            ></div>
                        </HoverCardTrigger>
                        <HoverCardContent side="top" align="end">
                            テストで間違えた単語を練習しましょう。
                        </HoverCardContent>
                    </HoverCard>
                )}
                <Button
                    onClick={onStart}
                    variant='outline'
                >
                    スタート
                </Button>
            </div>
            <div className="mt-4">
                <Button
                    onClick={onTest}
                    variant='outline'
                >
                    テストをはじめる
                </Button>
            </div>
        </div>
    )
}

export default ReadyCard
