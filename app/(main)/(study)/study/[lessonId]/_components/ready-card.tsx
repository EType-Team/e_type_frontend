'use client'

import { Button } from "@/components/ui/button"

interface ReadyCardProps {
    label: string
    time: number
    onStart: () => void
}

const ReadyCard = ({
    label,
    time,
    onStart
}: ReadyCardProps) => {
    return ( 
        <div className="flex flex-col items-center gap-y-10">
            <p>{label}</p>
            <p>制限時間{time / 60000}分</p>
            <Button
                onClick={onStart}
                variant='outline'
            >
                スタート
            </Button>
        </div>
    );
}
 
export default ReadyCard;
