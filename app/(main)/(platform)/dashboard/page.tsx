import { KeyboardMusic, List } from "lucide-react"
import { cookies } from "next/headers"
import { UserWordProgress } from "@/types"
import TotalTypingCard from "./_components/total-typing-card"
import WordProgressTable from "./_components/word-progress-table"
import { columns } from "./_components/columns"

const DashboardPage = async () => {
    const cookie = cookies().toString()
    const userWordProgressData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/userWordProgresses`, {
        headers: { Cookie: cookie },
        cache: "no-store"
    })
    const userWordProgress: UserWordProgress[] = await userWordProgressData.json()
    const totalTypingNum = userWordProgress.reduce((sum, item) => sum + item.total_typings, 0);

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
}
 
export default DashboardPage