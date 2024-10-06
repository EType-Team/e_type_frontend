import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="p-8 w-full border-t">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <ul className="flex items-center justify-center space-x-8">
                        <Link href="/operator" className="text-blue-500 underline" target="_blank">
                            運営元
                        </Link>
                        <Link href="/terms" className="text-blue-500 underline" target="_blank">
                            利用規約
                        </Link>
                        <Link href="/privacy" className="text-blue-500 underline" target="_blank">
                            プライバシーポリシー
                        </Link>
                    </ul>
                </div>
                <div className="text-center text-sm mt-4 md:mt-0">
                    <p>&copy; 2024 EType. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
