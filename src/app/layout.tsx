import '@/styles/globals.css';

import ClientLayout from './ClientLayout';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
