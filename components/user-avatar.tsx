import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
    return (
        <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>ET</AvatarFallback>
        </Avatar>
    );
}
 
export default UserAvatar;