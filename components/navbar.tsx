import Logo from "@/components/logo"
import UserAvatar from "./user-avatar"
import { getUser } from "@/data/user"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Navbar = async () => {
    const user = await getUser()
    return ( 
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm justify-between">
            <Logo />
            {user ? (
                <UserAvatar
                    name={user?.name}
                    image={user?.image}
                />
            ): (
                <Button>
                    <Link
                        href="/auth/login"
                    >
                        ログイン
                    </Link>
                </Button>
            )}
        </div>
    )
}
 
export default Navbar