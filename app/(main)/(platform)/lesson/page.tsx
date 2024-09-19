import { PencilLine } from "lucide-react"
import LessonCard from "./_components/lesson-card"
import { getLessons } from "@/data/lesson";

const LessonPage = async () => {
    const lessons = await getLessons()
    return (
        <>
            {lessons ? (
                <div className="p-8">
                    {lessons.map((lesson) => (
                    <LessonCard
                        key={lesson.id}
                        icon={PencilLine}
                        label={lesson.title}
                        lessonId={lesson.id}
                    />
                    ))}
                </div>
            ) : (
                <div className="p-8">
                    レッスンデータを取得できませんでした。
                </div>
            )}
        </>
    )
}
 
export default LessonPage