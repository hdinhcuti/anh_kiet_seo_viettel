import Image from 'next/image';

import FeaturedPackages from '@/components/sections/FeaturedPackages';
import Banner1 from '@public/images/banner-1.webp';

import FeatureNews from '@/components/sections/FeaturedNews';
import { ServiceSection, SlideShow } from '@/components/sections/home';
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

const Home = () => {
    return (
        <div className="home-wrapper h-full">
            <SlideShow />
            <div className="home-container pt-[2rem] w-full ">
                <div className="hero-title text-center flex justify-center items-center text-black h-[7rem] mx-auto">
                    <h1 className="w-200 px-[1.5rem]">
                        <strong className="sm:text-2xl md:text-3xl lg:text-4xl">
                            Viettel <span className="text-primary">Cần Thơ</span> – Nhà cung cấp dịch vụ di động,
                            internet, truyền hình và giải pháp CNTT
                        </strong>
                    </h1>
                </div>

                <ServiceSection />

                <div className="pt-10">
                    <div className=" relative w-full h-[500px] overflow-hidden">
                        <Image src={Banner1} alt="Family Banner" fill className="object-cover" priority />

                        <div className="absolute inset-0 flex items-center left-10">
                            <div className="ml-10 md:ml-20 w-[75%] md:w-[45%]">
                                <h1 className="text-white font-bold text-3xl md:text-5xl leading-tight">
                                    Giải pháp hoàn hảo cho gia đình bạn
                                </h1>

                                <p className="text-white/90 mt-4 text-lg md:text-xl">
                                    An toàn – tiện lợi – kết nối mọi lúc, mọi nơi.
                                </p>

                                <p className="text-white/80 mt-2 text-base md:text-lg">
                                    Dành cho mọi nhà. Hỗ trợ 24/7.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="featured-products w-full pb-5">
                    <FeaturedPackages />
                </div>
                <div className="news-home w-full pb-5">
                    <FeatureNews />
                </div>
            </div>
        </div>
    );
};

export default Home;
