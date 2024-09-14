'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

interface ResultContentProps {
    totalTypingNum: number
}

const ResultContent = ({
    totalTypingNum
}: ResultContentProps) => {
    return (
        <Card className="w-[300px]">
            <CardHeader>
                <CardTitle className="text-center">結果</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center overflow-y-auto max-h-[250px] p-10">
                <p>合計タイピング数</p>
                <p>{totalTypingNum}</p>
            </CardContent>
            <CardFooter className="justify-center">
                <Button>
                    <Link href="/lesson">
                        レッスン一覧
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ResultContent;
