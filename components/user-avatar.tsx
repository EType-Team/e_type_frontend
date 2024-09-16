"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { BookCheck, Layout, Settings } from "lucide-react";
import DropdownMenuContentsItem from "./dropdown-menu-contents-item";

interface UserAvatarProps {
    name: string
    image: string
}

const setRoutes = [
    {
        icon: Layout,
        label: 'ダッシュボード',
        href: '/dashboard',
    },
    {
        icon: BookCheck,
        label: 'レッスン',
        href: '/lesson',
    },
    {
        icon: Settings,
        label: '設定',
        href: '/settings',
    },
]

const UserAvatar = async ({
    name,
    image
}: UserAvatarProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex justify-center items-center p-2 rounded-md hover:bg-slate-100 hover:cursor-pointer">
                    <p className="mr-2">{name}</p>
                    <Avatar className="border">
                            <AvatarImage src={`${image || "/"}`} />
                            <AvatarFallback>ET</AvatarFallback>
                    </Avatar>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {setRoutes.map((route) => (
                    <DropdownMenuContentsItem
                        key={route.href}
                        icon={route.icon}
                        label={route.label}
                        href={route.href}
                    />
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
 
export default UserAvatar;