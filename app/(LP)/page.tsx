import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <Image
                src="/etype-lp.png"
                alt="etype-lp"
                width={500}
                height={0}
            />
            <p className="text-2xl m-4 font-semibold">
                新しい学習体験
            </p>
            <Button
                variant="outline"
            >
                <Link
                    href='/dashboard'
                >
                    はじめる
                </Link>
            </Button>
        </div>
    );
}
