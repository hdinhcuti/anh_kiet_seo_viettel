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
    const lengthItems = items.length;
    return (
        <div className={`lg:w-full w-full rounded-2xl ${classNames}`}>
            <Swiper
                key={lengthItems}
                breakpoints={{
                    0: { slidesPerView: 1.2 },
                    340: { slidesPerView: 1.5 },
                    640: { slidesPerView: 2.2 },
                    768: { slidesPerView: 2.2 },
                    1024: { slidesPerView: lengthItems > 3 ? 3.2 : lengthItems },
                }}
                spaceBetween={5}
                grabCursor={true}
                className="carousel-product h-full w-full"
            >
                {items.map((value, index) => (
                    <SwiperSlide key={index} className="!flex justify-center items-center !py-5 !px-1 !h-full">
                        <ProductCard key={index} item={value} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedPackagesCarousel;
