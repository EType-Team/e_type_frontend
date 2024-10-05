import Link from 'next/link'

const TermsPage = () => {
    return (
        <div className="flex flex-col items-center py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">利用規約</h1>
            <div className="max-w-4xl text-left leading-relaxed">
                <h2 className="text-xl font-semibold mb-4">第1条（適用）</h2>
                <p className="mb-4">
                    本規約は、ユーザーとEType運営者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                    EType運営者は、本サービスに関し、本規約のほか、利用規約のルールなど各種の定めをすることがあります。
                </p>

                <h2 className="text-xl font-semibold mb-4">第2条（利用登録）</h2>
                <p className="mb-4">
                    本サービスにおいて、登録希望者が本規約に同意の上、EType運営者が定める方法によって利用登録を申請し、EType運営者が承認することにより、利用登録が完了します。
                </p>

                <h2 className="text-xl font-semibold mb-4">第3条（ユーザーIDおよびパスワードの管理）</h2>
                <p className="mb-4">
                    ユーザーは、自己の責任において、ユーザーIDおよびパスワードを適切に管理するものとします。
                </p>

                <h2 className="text-xl font-semibold mb-4">第4条（禁止事項）</h2>
                <p className="mb-4">
                    ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>法令または公序良俗に違反する行為</li>
                    <li>犯罪行為に関連する行為</li>
                    <li>本サービスの運営を妨害するおそれのある行為</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">第5条（サービス提供の停止）</h2>
                <p className="mb-4">
                    EType運営者は、予告なく本サービスの提供を停止または中断することができます。
                </p>

                <h2 className="text-xl font-semibold mb-4">第6条（退会）</h2>
                <p className="mb-4">
                    ユーザーは、ETypeが定める退会手続により、退会できるものとします。
                </p>

                <h2 className="text-xl font-semibold mb-4">第7条（個人情報の取り扱い）</h2>
                <p className="mb-4">
                    ETypeは、Googleログインを通じて取得した個人情報を、プライバシーポリシーに従って適切に取り扱います。
                    ユーザーは、当サービスを利用することにより、ETypeがGoogleアカウント情報（氏名、メールアドレスなど）を取得し、
                    これをサービス運営の範囲内で利用することに同意するものとします。
                </p>
                <p className="mb-4">
                    プライバシーポリシーについては、<Link href="/privacy" className="text-blue-500 underline">こちら</Link>からご確認いただけます。
                </p>

                <h2 className="text-xl font-semibold mb-4">第8条（免責事項）</h2>
                <p className="mb-4">
                    EType運営者は、システムトラブルや不可抗力によるサービス停止について、ユーザーに生じた損害に対して一切の責任を負わないものとします。
                </p>
            </div>
        </div>
    )
}

export default TermsPage
