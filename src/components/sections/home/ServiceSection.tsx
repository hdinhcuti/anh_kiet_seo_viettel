'use client';
import ServiceCard, { ServiceCardProps } from '@/components/ui/ServiceCard/ServiceCard';
import cameraCard from '@public/images/camera-card.webp';
import dichVuTraSau from '@public/images/dich-vu-tra-sau.webp';
import lapMangViettel from '@public/images/lap-mang-vietttel.webp';
import truyenHinh from '@public/images/truyen-hinh.webp';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ServiceSection() {
    const serviceCards: ServiceCardProps[] = [
        {
            title: 'Lắp đặt Camera Viettel thông minh',
            thumbnail: cameraCard.src,
            description:
                'Viettel cung cấp dịch vụ lắp đặt camera an ninh chất lượng cao, giá cả phải chăng và hỗ trợ khách hàng nhanh chóng. Giúp khách hàng giám sát và bảo vệ tài sản, an toàn cho gia đình và doanh nghiệp.',
            slug: '/lap-dat-camera-viettel-thong-minh',
        },
        {
            title: 'Lắp đặt truyền hình Viettel TV360',
            thumbnail: truyenHinh.src,
            description:
                'Viettel cung cấp dịch vụ lắp đặt truyền hình với nhiều kênh truyền hình chất lượng cao, giá cả phải chăng và hỗ trợ khách hàng nhanh chóng. Giá chỉ 10k/tháng xem được khoản 150 kênh',
            slug: '/lap-dat-truyen-hinh-viettel-tv360',
        },
        {
            title: 'Lắp đặt internet Viettel Toàn Quốc',
            thumbnail: lapMangViettel.src,
            description:
                'Viettel cung cấp dịch vụ lắp đặt internet nhanh và ổn định, đáp ứng nhu cầu truy cập internet của khách hàng cá nhân và doanh nghiệp. Chất lượng dịch vụ cao, giá cả hợp lý và hỗ trợ khách hàng nhanh chóng.',
            slug: '/lap-dat-internet-viettel-toan-quoc',
        },
        {
            title: 'Dịch vụ di động trả sau Viettel',
            thumbnail: dichVuTraSau.src,
            description:
                'Các gói cước Viettel trả sau ngày càng đa dạng, đáp ứng được mọi nhu cầu của các khách hàng sử dụng. Vì nhu cầu gọi thoại, gửi tin nhắn, sử dụng data để truy cập Internet ngày càng gia tăng.',
            slug: '/dich-vu-di-dong-tra-sau-viettel',
        },
    ];

    return (
        <>
            <div className="w-full hidden sm:flex justify-center pt-10">
                <div className="grid grid-cols-2 gap-10 max-w-[1000px] w-full px-4">
                    {serviceCards.map((value, index) => {
                        return (
                            <div key={index} className="flex justify-center">
                                <ServiceCard item={value} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="w-full flex sm:hidden justify-center pt-10">
                <div className=" max-w-[900px] w-full">
                    <Swiper
                        // modules={[Autoplay, Navigation, Pagination]}
                        slidesPerView={1.2}
                        spaceBetween={5}
                        autoplay={{ delay: 3000 }}
                        // navigation
                        pagination={false}
                    >
                        {serviceCards.map((value, index) => {
                            return (
                                <SwiperSlide key={index} className="!flex justify-center !p-5">
                                    <ServiceCard item={value} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
