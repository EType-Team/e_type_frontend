import { getUser } from "@/data/user"
import LogoutCard from "./_components/logout-card"
import RenameCard from "./_components/rename-card"

const SettingsPage = async () => {
    const user = await getUser()
    return ( 
        <>
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
        </>
    )
}
 
export default SettingsPage