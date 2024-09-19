import { cookies } from "next/headers"
import Study from "./_components/study"
import { getLessonById } from "@/data/lesson";
import { getLessonWordsByLessonId } from "@/data/lessonWord";

const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const StudyLessonIdPage = async ({
    params
}: {
    params: { lessonId: number }
}) => {
    const cookie = cookies().toString()
    const lesson = await getLessonById(params.lessonId)
    const lessonWords = await getLessonWordsByLessonId(params.lessonId)

    if (!lessonWords || !lesson) {
        return (
            <div className="flex items-center justify-center mt-40">
                データの取得に失敗しました。
            </div>
        )
    }
    const words = lessonWords.map((lw: any) => ({
        id: lw.word.id,
        english: lw.word.english,
        japanese: lw.word.japanese,
        mp3Path: lw.word.mp3_path,
    }))
    const shuffledWords = shuffleArray(words)

    return (
        <div className="relative flex flex-col items-center gap-y-48">
            <Study
                label={lesson.title}
                time={30000}
                cookie={cookie}
                words={shuffledWords}
            />
         </div>

    )
}
 
export default StudyLessonIdPage