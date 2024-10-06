import Image from "next/image"
import LoadingNavigateButton from "@/components/loading-navigate-button"
import Footer from "@/components/footer"

export default function Home() {
    return (
        <div>

            <div className="flex flex-col h-screen bg-gradient-to-b from-white to-blue-300 text-black">
                <header className="flex justify-between items-center p-6">
                    <h1 className="text-4xl font-bold"></h1>
                    <nav>
                        <ul className="flex space-x-6">

                        </ul>
                    </nav>
                </header>

                <main className="flex-grow flex flex-col items-center justify-center text-center">
                    <div className="max-w-2xl mx-auto">
                        <Image
                            src="/etype-lp.png"
                            alt="Typing app"
                            width={500}
                            height={500}
                            className="object-contain mb-8 drop-shadow-lg"
                            priority={true}
                        />
                        <h2 className="text-3xl font-extrabold mb-4">新しい学習体験</h2>
                        <p className="text-xl mb-8"></p>

                        <div className="flex justify-center">
                            <LoadingNavigateButton
                                variant="outline"
                                url="/dashboard"
                                label="はじめる"
                                loadingLabel="読み込み中..."
                            />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}