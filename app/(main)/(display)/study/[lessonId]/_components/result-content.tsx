import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import Link from "next/link"

const ResultContent = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-center">
                    結果
                </CardTitle>
            </CardHeader>
            <CardContent>
                どの単語を学習したかを表示する
            </CardContent>
            <CardFooter className="justify-center">
                <Button>
                    <Link href='/lesson'>
                        レッスン一覧
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
 
export default ResultContent