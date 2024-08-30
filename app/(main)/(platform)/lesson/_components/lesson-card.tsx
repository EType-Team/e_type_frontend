import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface LessonCardProps {
    icon: LucideIcon
    label: string
    lessonId: string
}

const LessonCard = ({
    icon: Icon,
    label,
    lessonId
}: LessonCardProps) => {
    return ( 
        <Card className="max-w-60 hover:shadow-md cursor-pointer">
            <Link 
                href={`/study/${lessonId}`}
                className="flex flex-col items-center"
            >
                <Icon className="m-4" />
                <CardHeader>
                    <CardTitle>{label}</CardTitle>
                </CardHeader>
            </Link>
        </Card>
     );
}
 
export default LessonCard;