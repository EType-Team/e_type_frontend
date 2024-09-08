import Logo from "@/components/logo"
import UserAvatar from "./user-avatar"

const Navbar = () => {
    return ( 
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm justify-between">
            <Logo />
            <UserAvatar />
        </div>
    )
}
 
export default Navbar