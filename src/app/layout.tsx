import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Quiz App - Test Your Knowledge",
    description: "A fun and interactive quiz application to test your knowledge",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
