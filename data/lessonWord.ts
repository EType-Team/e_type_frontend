import { LessonWord } from "@/types"

export const getLessonWordsByLessonId = async (lessonId: number): Promise<LessonWord[] | false> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lessonWord/${lessonId}`)
        if (!response.ok) {
            return false
        }
        const data: LessonWord[] = await response.json()
        return data
    } catch (err) {
        return false
    }
}