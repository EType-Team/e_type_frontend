import LoadingNavigateButton from "@/components/loading-navigate-button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

interface ResultTestContentProps {
    totalCorrectWordNum: number
    totalNotCorrectWordNum: number
}

const ResultTestContent = ({
    totalCorrectWordNum,
    totalNotCorrectWordNum
}: ResultTestContentProps) => {
    return (
        <Card className="w-[300px]">
            <CardHeader>
                <CardTitle className="text-center">結果</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
                <p>正解</p>
                <p className="text-2xl font-bold">{totalCorrectWordNum}</p>
                <p>不正解</p>
                <p className="text-2xl font-bold">{totalNotCorrectWordNum}</p>
            </CardContent>
            <CardFooter className="justify-center">
                <LoadingNavigateButton
                    variant="outline"
                    url="/lesson"
                    label="レッスン一覧に戻る"
                    loadingLabel="読み込み中..."
                />
            </CardFooter>
        </Card>
    );
}
 
export default ResultTestContent;