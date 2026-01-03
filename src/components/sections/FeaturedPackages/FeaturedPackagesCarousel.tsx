'use client';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import { PackageItem } from '@/types/package';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
interface IProps {
    classNames?: string;
    items: PackageItem[];
}
const FeaturedPackagesCarousel = ({ items, classNames }: IProps) => {
    return (
        <div className={`lg:w-full md:w-[700px] min-w-[300px] rounded-2xl bg-gray-100 ${classNames}`}>
            <Swiper
                breakpoints={{
                    // Mobile
                    0: { slidesPerView: 1.2 },

                    // Tablet
                    640: { slidesPerView: 1.3 },

                    // PC nhỏ
                    768: { slidesPerView: 1.5 },

                    // PC lớn
                    1024: { slidesPerView: 3.2 },
                }}
                spaceBetween={5}
                grabCursor={true}
                className="carousel-product "
            >
                {items.map((value, index) => (
                    <SwiperSlide key={index} className="!flex justify-center md:!p-5 !p-1 ">
                        <ProductCard key={index} item={value} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedPackagesCarousel;
