'use client';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import { PackageItem } from '@/types/package';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
interface IProps {
    items: PackageItem[];
}
const FeaturedPackagesCarousel = ({ items }: IProps) => {
    return (
        <div className="lg:w-full md:w-[700px] min-w-[300px] bg-gray-100">
            <Swiper
                breakpoints={{
                    // Mobile
                    0: { slidesPerView: 1.2 },

                    // Tablet
                    640: { slidesPerView: 1.3 },

                    // PC nhỏ
                    768: { slidesPerView: 1.5 },

                    // PC lớn
                    1024: { slidesPerView: 3 },
                }}
                spaceBetween={5}
                grabCursor={true}
                className="carousel-product "
            >
                {items.map((value) => (
                    <SwiperSlide key={value.id} className="!flex justify-center !p-5 ">
                        <ProductCard item={value} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedPackagesCarousel;
