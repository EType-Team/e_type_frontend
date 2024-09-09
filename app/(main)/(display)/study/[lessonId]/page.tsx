import { cookies } from "next/headers"
import Study from "./_components/study"
import { Lesson, LessonWord } from "@/types"

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
    params: { lessonId: string }
}) => {
    const lessonData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lessons/${params.lessonId}`, {
        headers: { Cookie: cookies().toString() },
    })
    const lesson: Lesson = await lessonData.json()

    const lessonWordsData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lessonWord/${params.lessonId}`, {
        headers: { Cookie: cookies().toString() },
    })
    const lessonWords: LessonWord[] = await lessonWordsData.json()

    const words = lessonWords.map((lw: any) => ({
        id: lw.word.id,
        english: lw.word.english,
        japanese: lw.word.japanese,
        mp3Path: lw.word.mp3_path,
    }))

    const shuffledWords = shuffleArray(words)

    return ( 
        <div className="relative flex flex-col items-center gap-y-52">
            <Study
                label={lesson.title}
                time={30000}
                words={shuffledWords}
            />
        </div>
    )
}
 
export default StudyLessonIdPage