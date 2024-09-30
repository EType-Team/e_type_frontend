import { SquarePen } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const DashboardPage = async () => {
    return (
        <div className="p-8 flex">
            <Link href="/admin/dashboard/register-lesson">
                <Card className="w-60 m-2 hover:shadow-md cursor-pointer flex flex-col items-center">
                    <SquarePen className="m-4" />
                    <CardHeader>
                        <CardTitle>レッスンを登録</CardTitle>
                    </CardHeader>
                </Card>
            </Link>

            <Link href="/admin/dashboard/english-words">
                <Card className="w-60 m-2 hover:shadow-md cursor-pointer flex flex-col items-center">
                    <SquarePen className="m-4" />
                    <CardHeader>
                        <CardTitle>英単語</CardTitle>
                    </CardHeader>
                </Card>
            </Link>
        </div>
    );
};

export default DashboardPage;
