"use client"

import { LogOut } from "lucide-react"
import LogoutCard from "./_components/logout-card"

const SettingsPage = () => {
    return ( 
        <div className="p-8">
            <LogoutCard
                icon={LogOut}
                label="logout"
            />
        </div>
    )
}
 
export default SettingsPage