"use client"

import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useMutateAuth } from "@/hooks/use-mutate-auth"
import { LucideIcon } from "lucide-react"

interface LogoutCardProps {
    icon: LucideIcon
    label: string
}

const LogoutCard = ({
    icon: Icon,
    label,
}: LogoutCardProps) => {
    const { logoutMutation } = useMutateAuth()
    const logout = async () => {
        await logoutMutation.mutateAsync()
    }
    return ( 
        <Card 
            className="max-w-60 hover:shadow-md cursor-pointer flex flex-col items-center"
            onClick={logout}
        >
            <Icon className="m-4" />
            <CardHeader>
                <CardTitle>{label}</CardTitle>
            </CardHeader>
        </Card>
    )
}
 
export default LogoutCard;