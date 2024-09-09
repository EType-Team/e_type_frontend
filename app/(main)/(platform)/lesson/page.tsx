import { PencilLine } from "lucide-react"
import LessonCard from "./_components/lesson-card"
import { cookies } from "next/headers"
import { Lesson } from "@/types";

const LessonPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lessons`, {
        headers: { Cookie: cookies().toString() },
    })
    const data: Lesson[] = await res.json()
    return (
        <div className="p-8">
            {data.map((lesson) => (
            <LessonCard
                key={lesson.id}
                icon={PencilLine}
                label={lesson.title}
                lessonId={lesson.id}
            />
            ))}
        </div>
    )
}
 
export default LessonPage