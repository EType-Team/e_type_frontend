import { cookies } from "next/headers"
import TotalTypingCard from "./_components/total-typing-card"
import WordProgressTable from "./_components/word-progress-table"
import { columns } from "./_components/columns"
import { getUserWordProgresses } from "@/data/userWordProgress"
import { getLessons } from "@/data/lesson"
import { getUser } from "@/data/user"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"

const DashboardPage = async () => {
    const cookieStore = cookies()
    const tokenCookie = cookieStore.get('token')?.value
    const user = await getUser()

    const userWordProgresses = await getUserWordProgresses(tokenCookie)
    const lessons = await getLessons()

    return (
        <div className={cn(
            "h-screen relative",
            userWordProgresses && "h-full"
        )}>
            <div className="p-8 flex">
                <WordProgressTable
                    columns={columns}
                    data={userWordProgresses ? userWordProgresses : []}
                    lessons={lessons ? lessons : []}
                    user={user}
                    token={tokenCookie}
                />
                <div className="ml-10">
                    <TotalTypingCard
                        userWordProgresses={userWordProgresses}
                    />
                </div>
            </div>
            <div className={cn(
                !userWordProgresses && "absolute w-full bottom-0"
            )}>
                <Footer />
            </div>
        </div>
    )
}
 
export default DashboardPage