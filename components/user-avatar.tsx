import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUser } from "@/data/user";

interface UserAvatarProps {
    name: string
    image: string
}

const UserAvatar = async ({
    name,
    image
}: UserAvatarProps) => {
    return (
        <div className="flex justify-center items-center p-2 rounded-md hover:bg-slate-100 hover:cursor-pointer">
            <p className="mr-2">{name}</p>
            <Avatar className="border">
                <AvatarImage src={`${image || "/"}`} />
                <AvatarFallback>ET</AvatarFallback>
            </Avatar>
        </div>
    );
}
 
export default UserAvatar;