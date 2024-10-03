import { UserWordProgress } from "@/types";

export const getUserWordProgresses = async (token?: string): Promise<UserWordProgress[] | null> => {
    try {
        if (!token) {
            return null
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/userWordProgresses`, {
            headers: {
                'Cookie': `token=${token}`
            },
            cache: 'no-cache'
        })
        if (!response.ok) {
            return null
        }
        const data: UserWordProgress[] = await response.json()
        return data
    } catch (err) {
        return null
    }
}

export const handleCurrectTyping = async (wordId: number, cookies: string) => {
    try {
        if (!cookies) {
            throw new Error('認証情報がありません。')
        }
        const csrfCookie = cookies.split('; ').find(row => row.startsWith('_csrf='));
        if (!csrfCookie) {
            throw new Error('認証情報がありません。')
        }
        const csrfToken = csrfCookie.split('=')[1]
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/userWordProgresses/incrementProgress`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Cookies: cookies,
                'X-CSRF-token': csrfToken
            },
            credentials: 'include',
            body: JSON.stringify({
                word_id: wordId
            }),
        })

        if (!response.ok) {
            throw new Error('リクエストが失敗しました')
        }
    } catch (error) {
        console.error("進捗の更新中にエラーが発生しました:", error);
    }
}
