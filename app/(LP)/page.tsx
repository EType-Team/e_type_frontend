import Image from "next/image"
import StartButton from "./_components/start-button"

export default async function Home() {
    return (
        <div className="flex flex-col h-screen items-center mt-60">
            <Image
                src="/etype-lp.png"
                alt="etype-lp"
                width={500}
                height={0}
            />
            <p className="text-2xl m-4 font-semibold">
                新しい学習体験
            </p>
            <StartButton />
        </div>
    )
}
