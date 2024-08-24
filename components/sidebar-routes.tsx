'use client'

import { BookCheck, Layout, Settings } from "lucide-react";
import SidebarItem from "@/components/sidebar-item";

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

const SidebarRoutes = () => {
    return ( 
        <div className="flex flex-col w-full">
            {setRoutes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
     );
}
 
export default SidebarRoutes;