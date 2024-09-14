import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { LucideIcon } from "lucide-react";

interface TotalTypingCardProps {
    icon: LucideIcon
    totalTypingNum: number
}

const TotalTypingCard = ({
    icon: Icon,
    totalTypingNum
}: TotalTypingCardProps) => {
    return (
        <Card 
        className="w-[200px] flex flex-col items-center"
    >
        <Icon className="m-4" />
        <CardHeader>
            <CardTitle>{totalTypingNum}</CardTitle>
        </CardHeader>
    </Card>
    );
}
 
export default TotalTypingCard;