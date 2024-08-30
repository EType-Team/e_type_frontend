import { PencilLine } from "lucide-react"
import LessonCard from "./_components/lesson-card"

const LessonPage = () => {
    return ( 
        <div className="p-8">
            <LessonCard
                icon={PencilLine}
                label="easy"
                lessonId="1"
            />
        </div>
    )
}
 
export default LessonPage