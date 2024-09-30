import LoadingNavigateButton from "@/components/loading-navigate-button"
import Logo from "@/components/logo"
import UserAvatar from "@/components/user-avatar"
import { getUser } from "@/data/user"

const AdminNavbar = async () => {
    const user = await getUser()
    return ( 
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm justify-between">
            <div className="flex items-center">
                <Logo />
                <h1 className="ml-2 mt-1 font-bold">管理者</h1>
            </div>
            {user ? (
                <UserAvatar
                    name={user?.name}
                    image={user?.image}
                />
            ): (
                <LoadingNavigateButton
                    variant="outline"
                    url="/auth/login"
                    label="ログイン"
                    loadingLabel="読み込み中..."
                />
            )}
        </div>
    )
}
 
export default AdminNavbar
