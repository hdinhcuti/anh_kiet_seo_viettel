'use client';
import NewsCard from '@/components/ui/NewsCard/NewsCard';
import { NewsSummary } from '@/types/news';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
    items: NewsSummary[];
}
const FeaturedNewsCarousel = ({ items }: IProps) => {
    return (
        <div className="lg:w-full md:w-[700px] min-w-[300px] rounded-xl">
            <Swiper
                direction="horizontal"
                breakpoints={{
                    0: {
                        slidesPerView: 4.3,
                        direction: 'vertical',
                    },
                    640: {
                        slidesPerView: 4.3,
                        direction: 'vertical',
                    },
                    768: {
                        slidesPerView: 4.3,
                        direction: 'vertical',
                    },
                    1024: {
                        slidesPerView: 3.1,
                        direction: 'horizontal',
                    },
                }}
                spaceBetween={1}
                grabCursor={true}
                className="
                    carousel-product
                    h-[460px]
                    md:h-[630px]
                    lg:h-full
                    [&_.swiper-slide]:!h-[150px]
                    lg:[&_.swiper-slide]:!h-full
                "
            >
                {items.map((value) => (
                    <SwiperSlide className="flex p-3 mt-2 justify-center">
                        <NewsCard item={value} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedNewsCarousel;
