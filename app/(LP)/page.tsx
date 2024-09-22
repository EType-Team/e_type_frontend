import Image from "next/image"
import StartButton from "./_components/start-button"
import About from "./_components/about"

export default function Home() {
    return (
        <div>
            <div className="flex flex-col h-screen bg-gradient-to-b from-blue-50 to-blue-300 text-black">
            {/*<div className="flex flex-col h-screen bg-gradient-to-b from-blue-100 to-blue-400 text-white">*/}
                <header className="flex justify-between items-center p-6">
                    <h1 className="text-4xl font-bold">aaa</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#home" className="hover:text-gray-600">Top</a></li>
                            <li><a href="#about" className="hover:text-gray-600">About</a></li>
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
                        />
                        <h2 className="text-3xl font-extrabold mb-4">新しい学習体験</h2>
                        <p className="text-xl mb-8">subtitle</p>
                        
                        <div className="flex justify-center">
                            <StartButton />
                        </div>
                    </div>
                </main>
            </div>

           
            <About />
        </div>
    )
}