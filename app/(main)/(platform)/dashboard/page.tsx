import { List } from "lucide-react"
import ProgressCard from "./_components/progress-card"
import { cookies } from "next/headers"
import { UserWordProgress } from "@/types"

const DashboardPage = async () => {
    const cookie = cookies().toString()
    const userWordProgressData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/userWordProgresses`, {
        headers: { Cookie: cookie },
        cache: "no-store"
    })
    const userWordProgress: UserWordProgress[] = await userWordProgressData.json()
    const sortedUserWordProgress = userWordProgress.sort((a, b) => b.proficiency - a.proficiency);

    return (
        <div>
            ダッシュボードページ
        </div>
    )
}
 
export default DashboardPage