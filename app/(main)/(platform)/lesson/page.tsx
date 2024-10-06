import { PencilLine } from "lucide-react"
import LessonCard from "./_components/lesson-card"
import { getLessons } from "@/data/lesson";
import Footer from "@/components/footer";

const LessonPage = async () => {
    const lessons = await getLessons()
    return (
        <div className="min-h-screen relative">
            {lessons ? (
                <div className="p-8 flex gap-10">
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
            <div className="absolute w-full bottom-0">
                <Footer />
            </div>
        </div>
    )
}
 
export default LessonPage