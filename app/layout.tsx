import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import CsrfProvider from "@/components/csrf-provider"
import QueryClientNextProvider from "@/components/query-client-next-provider"
import { Toaster } from "@/components/ui/sonner"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "EType",
  description: "webで英語の学習を完了することを目的に作られたサービスです。タイピングで英語を学習することができます。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}>
                <QueryClientNextProvider>
                    <CsrfProvider>
                    {children}
                    </CsrfProvider>
                </QueryClientNextProvider>
                <Toaster />
            </body>
        </html>
    )
}
