'use client'

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react";

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
