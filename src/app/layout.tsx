import '@/styles/globals.css';
import '@radix-ui/themes/styles.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">{children}</body>
        </html>
    );
}
