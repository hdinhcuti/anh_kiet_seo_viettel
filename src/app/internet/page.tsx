import FeaturedPackagesCarousel from '@/components/sections/FeaturedPackages/FeaturedPackagesCarousel';
import { PackageItem } from '@/types/package';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lắp đặt Internet Viettel Cần Thơ | Wifi, Truyền hình TV360 chính hãng',
    description:
        'Lắp đặt Internet Viettel tại Cần Thơ – Wifi tốc độ cao, Truyền hình TV360 chính hãng. Tư vấn miễn phí, lắp nhanh trong 24h, nhiều ưu đãi hấp dẫn.',

    keywords: [
        'lắp đặt internet viettel',
        'lắp mạng viettel cần thơ',
        'wifi viettel cần thơ',
        'internet viettel gia đình',
        'internet viettel doanh nghiệp',
        'truyền hình tv360 viettel',
        'đăng ký mạng viettel',
        'viettel cần thơ',
    ],

    openGraph: {
        title: 'Lắp đặt Internet Viettel Cần Thơ | Wifi & TV360',
        description:
            'Dịch vụ lắp mạng Viettel chính hãng tại Cần Thơ. Wifi ổn định, TV360 đa nội dung, hỗ trợ nhanh, giá tốt.',
        // url: 'https://viettelcantho.vn', // đổi đúng domain của bạn
        siteName: 'Viettel Cần Thơ',
        locale: 'vi_VN',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Lắp đặt Internet Viettel Cần Thơ',
        description:
            'Đăng ký Internet, Wifi Viettel & Truyền hình TV360 tại Cần Thơ. Lắp nhanh – Giá tốt – Hỗ trợ 24/7.',
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

const Internet = () => {
    const packagesData: PackageItem[] = [
        {
            id: 'giga2_h',
            name: 'Gói GIGA2_H',
            speed: '150 Mbps',
            description: 'Gói cước Internet tốc độ cao dành cho hộ gia đình.',
            price: '355.000',
        },
        {
            id: 'giga3_h',
            name: 'Gói GIGA3_H',
            speed: '200 Mbps',
            description: 'Gói cước Internet nâng cao cho nhu cầu sử dụng lớn.',
            price: '390.000',
        },
        {
            id: 'sup500_h',
            name: 'Gói SUP500_H',
            speed: '500 Mbps',
            description: 'Internet siêu tốc, phù hợp hộ gia đình sử dụng nhiều thiết bị.',
            price: '450.000',
        },
        {
            id: 'sup500_h',
            name: 'Gói SUP500_H',
            speed: '500 Mbps',
            description: 'Internet siêu tốc, phù hợp hộ gia đình sử dụng nhiều thiết bị.',
            price: '450.000',
        },
    ];
    return (
        <div className="w-full mx-auto flex flex-col">
            <div className=" bg-gray-100">
                <div className="max-w-[1300px] w-full md:h-100 h-160 p-5 mx-auto bg-gray-100">
                    <div className="flex md:flex-row flex-col justify-center items-center gap-5">
                        <div className="flex flex-col items-center justify-center gap-5 lg:w-100 w-70">
                            <div className="title text-4xl w-full font-bold flex items-center justify-center text-center">
                                Sản phẩm nổi bật
                            </div>
                            <article className="antialiased">
                                <p className="text-sm w-80 leading-relaxed text-gray-500 mx-auto h-full md:px-5 px-3 text-justify">
                                    Các gói cước dịch vụ internet Viettel đang phổ biến hiện nay. Trọn gói chỉ từ
                                    180.000đ/tháng có ngay dịch vụ internet cáp quang siêu tốc, băng thông lên đến 1Gbps
                                    (Download = Upload), trang bị wifi 6 và tặng 1 tháng cước sử dụng miễn phí khi đóng
                                    trước cước từ 12 tháng.
                                </p>
                            </article>
                        </div>

                        <div className="md:w-300 w-full overflow-hidden">
                            <FeaturedPackagesCarousel items={packagesData} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:my-2 my-5 w-[75%] h-full mx-auto md:p-5 ">
                <div className="flex items-center w-full ">
                    <div className="hidden md:block flex-grow h-px bg-primary/50"></div>

                    <span className="md:px-4 text-primary font-bold text-md md:text-3xl uppercase text-center mx-auto text-center">
                        DỊCH VỤ INTERNET VIETTEL
                    </span>

                    <div className="hidden md:block flex-grow h-px bg-primary/50"></div>
                </div>
            </div>
            <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 py-5 px-2 md:border-t md:border-transparent border-t border-red-200">
                <div className="lg:border-r border-gray/10 lg:pr-6 h-1000">
                    <div className="title">
                        <h1 className="text-primary font-bold text-md md:text-2xl text-center">
                            Lắp mạng Viettel – Internet Viettel – Khuyến mãi hấp dẫn nhất 2026
                        </h1>
                    </div>
                    <div className="content"></div>
                </div>

                <aside className="self-start sticky top-30 hidden lg:block">
                    <div className="w-[320px] border-2 border-red-500">
                        <div className="bg-red-500 text-white font-bold text-center py-3 uppercase">ĐỘI NGŨ TƯ VẤN</div>
                        <div className="divide-y divide-red-300">
                            {[
                                ['Hà Nội', '0987.654.321'],
                                ['TP.HCM', '0987.654.321'],
                                ['Đà Nẵng', '0987.654.321'],
                                ['Cần Thơ', '0987.654.321'],
                                ['Toàn Quốc', '0987.654.321'],
                            ].map(([city, phone], index) => (
                                <div key={index} className="flex">
                                    <div className="w-1/2 bg-red-50 text-gray-700 font-semibold py-3 text-center border-r border-red-300">
                                        {city}
                                    </div>
                                    <a
                                        href={`tel:${phone.replaceAll('.', '')}`}
                                        className="w-1/2 text-red-500 font-bold py-3 text-center hover:underline"
                                    >
                                        {phone}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Internet;
