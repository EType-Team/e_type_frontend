import { Lesson } from "@/types"

export const getLessons = async (): Promise<Lesson[] | null> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lessons`, {
            cache: "no-cache"
        })
        if (!response.ok) {
            return null
        }
        const data: Lesson[] = await response.json()
        return data
    } catch (err) {
        return null
    }
}

export const getLessonById = async (lessonId: number): Promise<Lesson | false> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lessons/${lessonId}`)
        if (!response.ok) {
            return false
        }
        const data: Lesson = await response.json()
        return data
    } catch (err) {
        return false
    }
}
