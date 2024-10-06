import { getUser } from "@/data/user"
import LogoutCard from "./_components/logout-card"
import RenameCard from "./_components/rename-card"
import Footer from "@/components/footer"

const SettingsPage = async () => {
    const user = await getUser()
    return ( 
        <div className="min-h-screen relative">
            {user ? (
                <div className="p-8 flex">
                    <RenameCard
                        username={user?.name!}
                        label="rename"
                    />
                    <LogoutCard
                        label="logout"
                    />
                </div>
            ) : (
                <div className="p-8">
                    ログインしてください。
                </div>
            )}
            <div className="absolute w-full bottom-0">
                <Footer />
            </div>
        </div>
    )
}
 
export default SettingsPage