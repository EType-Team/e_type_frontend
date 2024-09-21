import LoadingNavigateButton from "@/components/loading-navigate-button"
import Image from "next/image"

export default async function Home() {
    return (
        <div className="flex flex-col h-screen items-center mt-60">
            <Image
                src="/etype-lp.png"
                alt="etype-lp"
                width={500}
                height={500}
                className="object-contain"
            />
            <p className="text-2xl m-4 font-semibold">
                新しい学習体験
            </p>
            <LoadingNavigateButton
                variant="outline"
                url="/dashboard"
                label="はじめる"
                loadingLabel="読み込み中..."
            />
        </div>
    )
}
