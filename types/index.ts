export type UserWordProgress = {
    id: number
    user_id: number
    word_id: number
    total_typings: number
    typing_speed: number
    proficiency: number
    created_at: Date
    updated_at: Date
}

export type CsrfToken = {
    csrf_token: string
}

export type ResigterCredential = {
    name: string
    email: string
    password: string
}

export type LoginCredentail = {
    email: string
    password: string
}

export type Word = {
    id: number
    english: string
    japanese: string
    mp3path: string
}

export type Lesson = {
    id: number
    title: string
    description: string
}

export type LessonWord = {
    id: number
    lessonId: string
    wordId: string
    word: Word
}