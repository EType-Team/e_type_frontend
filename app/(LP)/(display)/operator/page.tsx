import Link from 'next/link'

const OperatorPage = () => {
    return (
        <div className="flex flex-col items-center py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">
                EType Team
            </h1>
            <div className="max-w-4xl leading-relaxed">
                <h2 className="mt-8 text-2xl font-medium">
                    人に寄り添い、楽しく開発するチームを目指しています
                </h2>
                <div className="text-left">
                    <p className="mt-8">
                        私たちはEType Teamです。ETypeは、ウェブで英語学習ができるサービスを開発・運営しています。
                        このサービスは、運営者たちの過去の英語学習の経験から「もっと楽しく、もっと身近に、もっとクールに勉強したい」という思いをもとに始まりました。
                    </p>
                    <p className="mt-4">
                        現在はまだ機能が少ないものの、少しずつ改善を重ね、最終的には英語学習に欠かせないサービスを目指しています。
                        チームメンバーは全員学生で、ユーザーヒアリングを通じて、どんな機能が役立つかを考えながら開発を進めています。
                    </p>
                    <p className="mt-4">
                        最近では、多くの学生がパソコンを持つようになり、パソコンを使った学習コンテンツの需要が増えています。
                        そこで私たちは、タイピングと英語学習、そしてゲーム要素を組み合わせたこのサービスが、唯一無二の存在になると確信しています。
                    </p>
                    <p className="mt-4">
                        パソコンを持ちながら、なぜか英単語帳で学習している、スマホの学習アプリではただボタンを押すだけで眠くなってしまう、そんな経験はありませんか？
                        私たちの目標は、こうした不満を持つ英語学習者にとって、楽しく効果的に学べるサービスを提供することです。
                    </p>
                    <p className="mt-8">
                        詳しい情報や開発の進捗については、私たちのGitHubをご覧ください。
                    </p>
                    <div className="mt-4">
                        <Link href="https://github.com/EType-Team" className="text-blue-500 underline" target="_blank">
                            EType GitHub リンク
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default OperatorPage
