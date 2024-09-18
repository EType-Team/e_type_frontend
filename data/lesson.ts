import { Lesson } from "@/types"

export const getLessons = async (): Promise<Lesson[] | false> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lessons`)
        if (!response.ok) {
            return false
        }
        const data: Lesson[] = await response.json()
        return data
    } catch (err) {
        return false
    }
}