"use client"

import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useMutateAuth } from "@/hooks/use-mutate-auth"
import { LogOut } from "lucide-react"

interface LogoutCardProps {
    label: string
}

const LogoutCard = ({
    label,
}: LogoutCardProps) => {
    const { logoutMutation } = useMutateAuth()
    const logout = async () => {
        await logoutMutation.mutateAsync()
    }
    return ( 
        <Card 
            className="w-60 m-2 hover:shadow-md cursor-pointer flex flex-col items-center"
            onClick={logout}
        >
            <LogOut className="m-4" />
            <CardHeader>
                <CardTitle>{label}</CardTitle>
            </CardHeader>
        </Card>
    )
}
 
export default LogoutCard;