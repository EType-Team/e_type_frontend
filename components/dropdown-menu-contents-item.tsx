"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface DropdownMenuContentsItemProps {
    icon: LucideIcon
    label: string
    href: string
}

const DropdownMenuContentsItem = ({
    icon: Icon,
    label,
    href
}: DropdownMenuContentsItemProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive = 
        (pathname === '/' && href === '/') ||
        pathname === href ||
        pathname.startsWith(`${href}/`)
    
    const onClick = () => {
        router.push(href)
    }
    return (
        <DropdownMenuItem
            onClick={onClick}
            className={cn(
                'flex items-center text-slate-500 text-sm font-[500] transition-al rounded-lg hover:text-slate-600 hover:bg-slate-300/20',
                isActive && 'text-sky-500 bg-sky-200/20 hover:bg-sky-200/20'
            )}
        >
        <div className="flex items-center gap-x-2">
                <Icon
                    size={22}
                    className={cn(
                        'text-slate-500',
                        isActive && 'text-sky-700'
                    )}
                />
                {label}
            </div>
        </DropdownMenuItem>
    );
}
 
export default DropdownMenuContentsItem;