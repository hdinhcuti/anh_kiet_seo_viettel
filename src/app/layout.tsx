'use client';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import '@/styles/globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <header className="h-[70px]">
                    <Header />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
