import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="p-8 w-full bg-gray-500 text-white">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <ul className="space-y-2">
                        <li>
                            <Link href="/operator">
                                運営元
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms">
                                利用規約
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy">
                                プライバシーポリシー
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="text-center mt-4 md:mt-0">
                    <p>&copy; 2024 EType. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
