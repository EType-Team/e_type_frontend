const PrivacyPage = () => {
    return (
        <div className="flex flex-col items-center py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>
            <div className="max-w-4xl text-left leading-relaxed">
                <p className="mb-4">
                    EType（以下、「当サービス」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                </p>

                <h2 className="text-xl font-semibold mb-4">第1条（個人情報）</h2>
                <p className="mb-4">
                    「個人情報」とは，個人情報保護法にいう「個人情報」を指すものであり，生存する個人に関する情報であって，当該情報に含まれる氏名，メールアドレスなどの記述等により特定の個人を識別できる情報（個人識別情報）を指します。
                </p>

                <h2 className="text-xl font-semibold mb-4">第2条（個人情報の収集方法）</h2>
                <p className="mb-4">
                    当サービスは、Googleログインを通じて氏名やメールアドレス等の個人情報を収集します。また、ユーザーが本サービスを利用する際に、利用状況やお問い合わせ内容に関する情報を収集することがあります。
                </p>

                <h2 className="text-xl font-semibold mb-4">第3条（個人情報を収集・利用する目的）</h2>
                <p className="mb-4">
                    当サービスが個人情報を収集・利用する目的は，以下のとおりです。
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>本サービスの提供・運営のため</li>
                    <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                    <li>本サービスに関する更新情報やお知らせ等の提供のため</li>
                    <li>サービス改善のための分析・統計データの作成のため</li>
                    <li>不正利用やセキュリティリスクの防止のため</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">第4条（利用目的の変更）</h2>
                <p className="mb-4">
                    当サービスは，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には，変更後の目的について，本ウェブサイト上に公表するものとします。
                </p>

                <h2 className="text-xl font-semibold mb-4">第5条（個人情報の第三者提供）</h2>
                <p className="mb-4">
                    当サービスは，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>人の生命，身体または財産の保護のために必要がある場合</li>
                    <li>公衆衛生の向上や児童の健全な育成の推進のために特に必要がある場合</li>
                    <li>国の機関や地方公共団体が法令の定める事務を遂行する場合</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">第6条（個人情報の開示）</h2>
                <p className="mb-4">
                    当サービスは，ユーザーから個人情報の開示を求められたときは，遅滞なくこれを開示します。ただし，開示により次のいずれかに該当する場合は，全部または一部を開示しないこともあります。
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合</li>
                    <li>法令に違反する場合</li>
                </ul>
                <p className="mb-4">
                    なお、個人情報の開示に際しては、1件あたり1,000円の手数料を申し受けます。
                </p>

                <h2 className="text-xl font-semibold mb-4">第7条（個人情報の訂正および削除）</h2>
                <p className="mb-4">
                    ユーザーは，当サービスの保有する自己の個人情報が誤っている場合，当サービスが定める手続により，個人情報の訂正，追加または削除を請求することができます。当サービスは，ユーザーからの請求を受けて遅滞なく対応します。
                </p>

                <h2 className="text-xl font-semibold mb-4">第8条（個人情報の利用停止等）</h2>
                <p className="mb-4">
                    当サービスは，本人から個人情報が不正に取り扱われているという理由により，その利用停止または削除を求められた場合，遅滞なく必要な調査を行い，適切な対応を行います。
                </p>

                <h2 className="text-xl font-semibold mb-4">第9条（プライバシーポリシーの変更）</h2>
                <p className="mb-4">
                    本ポリシーの内容は，法令その他の定めを除いて，ユーザーに通知することなく変更することができます。変更後のプライバシーポリシーは，本ウェブサイトに掲載された時点から効力を生じます。
                </p>

                <h2 className="text-xl font-semibold mb-4">第10条（お問い合わせ窓口）</h2>
                <p className="mb-4">
                    本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。
                </p>
                <p>
                    Eメールアドレス: example@example.com
                </p>
            </div>
        </div>
    );
}
 
export default PrivacyPage;