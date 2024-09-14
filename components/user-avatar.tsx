import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
    return (
        <Avatar className="border">
            <AvatarImage src="/user-icon.png" className="p-1" />
            <AvatarFallback>ET</AvatarFallback>
        </Avatar>
    );
}
 
export default UserAvatar;