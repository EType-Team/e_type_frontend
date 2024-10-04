"use client"

import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { UserWordProgress } from "@/types"
import { KeyboardMusic } from "lucide-react"

interface TotalTypingCardProps {
    userWordProgresses: UserWordProgress[] | null
}

const TotalTypingCard = ({
    userWordProgresses
}: TotalTypingCardProps) => {
    let output
    if (!userWordProgresses) {
        output = 'データがありません。'
    } else {
        output = userWordProgresses.reduce((sum, item) => sum + item.total_typings, 0)
    }
        
    return (
        <Card 
            className="w-[200px] flex flex-col items-center"
        >
            <KeyboardMusic className="m-4" />
            <CardHeader>
                <CardTitle>{output}</CardTitle>
            </CardHeader>
        </Card>
    )
}

export default TotalTypingCard
