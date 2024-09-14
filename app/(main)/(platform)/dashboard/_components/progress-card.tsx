import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { LucideIcon } from "lucide-react";
import WordProgressItem from "@/components/word-progress-item";
import { UserWordProgress } from "@/types";

interface ProgressCardProps {
    icon: LucideIcon
    userWordProgresses: UserWordProgress[]
}

const ProgressCard = ({
    icon: Icon,
    userWordProgresses
}: ProgressCardProps) => {
    return (
        <Card className="max-w-[600px] flex flex-col items-center">
            <Icon className="m-4" />
            <CardContent>
                {userWordProgresses.map((userWordProgress) => (
                    <WordProgressItem
                        key={userWordProgress.id}
                        userWordProgress={userWordProgress}
                    />
                ))}
            </CardContent>
        </Card>
    );
}
 
export default ProgressCard;