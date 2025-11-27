import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Test Your Knowledge - Quiz App',
    description: 'A beautiful, accessible quiz application built with Next.js and TypeScript',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="min-h-screen quiz-gradient">{children}</body>
        </html>
    )
}
