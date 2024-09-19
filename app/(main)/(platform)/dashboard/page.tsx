import { AwardIcon, KeyboardMusic } from "lucide-react"
import { cookies } from "next/headers"
import { UserWordProgress } from "@/types"
import TotalTypingCard from "./_components/total-typing-card"
import WordProgressTable from "./_components/word-progress-table"
import { columns } from "./_components/columns"
import { getUserWordProgresses } from "@/data/userWordProgress"

const DashboardPage = async () => {
    let userWordProgresses: UserWordProgress[] = []
    let totalTypingNum = 0
    let authError = false

    try {
        const cookieStore = cookies()
        const tokenCookie = cookieStore.get('token')?.value
        const data = await getUserWordProgresses(tokenCookie)
        if (data == false) {
            authError = true
        } else {
            userWordProgresses = data
            totalTypingNum = userWordProgresses.reduce((sum, item) => sum + item.total_typings, 0)
        }
    } catch (err) {
        authError = true
    }

    return (
        <div className="p-8 flex">
            <WordProgressTable
                columns={columns}
                data={authError ? [] : userWordProgresses}
                authError={authError}
            />
            <div className="ml-10">
                <TotalTypingCard
                    icon={KeyboardMusic}
                    totalTypingNum={authError ? 0 : totalTypingNum}
                />
            </div>
        </div>
    )
}
 
export default DashboardPage