import { KeyboardMusic, List } from "lucide-react"
import { cookies } from "next/headers"
import { UserWordProgress } from "@/types"
import TotalTypingCard from "./_components/total-typing-card"
import WordProgressTable from "./_components/word-progress-table"
import { columns } from "./_components/columns"

const DashboardPage = async () => {
    try {
        const cookieStore = cookies()
        const tokenCookie = cookieStore.get('token')?.value
        if (!tokenCookie) {
            throw new Error('No token cookie found')
        }

        const userWordProgressData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/userWordProgresses`, {
            headers: {
                'Cookie': `token=${tokenCookie}`
            },
            cache: "no-store"
        })
        if (!userWordProgressData.ok) {
            const errorData = await userWordProgressData.json()
            throw new Error(errorData.message || 'Failed to fetch user word progresses')
            
        }
        const userWordProgress: UserWordProgress[] = await userWordProgressData.json()
        if (!Array.isArray(userWordProgress)) {
            throw new TypeError('Expected userWordProgress to be an array')
        }
        const totalTypingNum = userWordProgress.reduce((sum, item) => sum + item.total_typings, 0)

        return (
            <div className="p-8 flex">
                <WordProgressTable
                    columns={columns}
                    data={userWordProgress}
                />
                <div className="ml-10">
                    <TotalTypingCard
                        icon={KeyboardMusic}
                        totalTypingNum={totalTypingNum}
                    />
                </div>
            </div>
        )
    } catch (error) {
        console.log('Error fetching user word progresses:', error)
        return (
            <div className="p-8 flex">
                <p className="text-red-500">データの取得に失敗しました。再度お試しください。</p>
            </div>
        )
    }
}
 
export default DashboardPage