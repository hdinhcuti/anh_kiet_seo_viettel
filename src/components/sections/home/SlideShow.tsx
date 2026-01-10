'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import slideShowImg1 from '@public/images/slide-show-1.webp';
import slideShowImg2 from '@public/images/slide-show-2.webp';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {
    return (
        <div className="slide-show">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                navigation
                pagination={{ clickable: true }}
                loop
            >
                {[slideShowImg1, slideShowImg2].map((img, i) => (
                    <SwiperSlide key={i}>
                        <Link href="#">
                            <Image
                                src={img}
                                alt={`Slide ${i + 1}`}
                                className="w-full h-full object-cover"
                                priority
                                loading="eager"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
