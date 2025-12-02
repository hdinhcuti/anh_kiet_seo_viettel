import '@/styles/globals.css';
import type { Metadata } from 'next';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
    title: 'Trang chủ - Lắp đặt Internet Viettel, Wifi Viettel, Truyền hình TV360 Viettel',
    description:
        'Dịch vụ lắp đặt Internet Viettel, Wifi Viettel, Truyền hình TV360 Viettel cho gia đình và doanh nghiệp. Hỗ trợ tư vấn miễn phí, lắp đặt nhanh chóng, ưu đãi hấp dẫn.',
    keywords: [],
};
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
