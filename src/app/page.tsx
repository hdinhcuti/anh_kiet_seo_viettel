'use client';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import FeaturedPackages from '@/components/sections/FeaturedPackages';
import ServiceCard from '@/components/ui/ServiceCard/ServiceCard';
import Banner1 from '@public/images/banner-1.webp';

import FeatureNews from '@/components/sections/FeaturedNews';
import slideShowImg1 from '@public/images/slide-show-1.webp';
import slideShowImg2 from '@public/images/slide-show-2.webp';
const Home = () => {
    return (
        <div className="home-wrapper h-1000">
            <div className="slide-show">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                >
                    <SwiperSlide>
                        <Link href="">
                            <Image
                                src={slideShowImg1}
                                alt="Slide Show Image 1"
                                className="w-full h-full object-cover"
                            />
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href="">
                            <Image
                                src={slideShowImg2}
                                alt="Slide Show Image 2"
                                className="w-full h-full object-cover"
                            />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="home-container pt-[2rem] w-full ">
                <div className="hero-title text-center flex justify-center items-center text-black h-[7rem] mx-auto">
                    <h1 className="w-200 px-[1.5rem]">
                        <strong className="sm:text-2xl md:text-3xl lg:text-4xl">
                            Viettel <span className="text-primary">Cần Thơ</span> – Nhà cung cấp dịch vụ di động,
                            internet, truyền hình và giải pháp CNTT
                        </strong>
                    </h1>
                </div>

                <div className="w-full hidden sm:flex justify-center pt-10">
                    <div className="grid grid-cols-2 gap-10 max-w-[900px] w-full px-4">
                        <div className="flex justify-center">
                            <ServiceCard />
                        </div>
                        <div className="flex justify-center">
                            <ServiceCard />
                        </div>
                        <div className="flex justify-center">
                            <ServiceCard />
                        </div>
                        <div className="flex justify-center">
                            <ServiceCard />
                        </div>
                    </div>
                </div>

                <div className="w-full flex sm:hidden justify-center pt-10">
                    <div className=" max-w-[900px] w-full">
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            slidesPerView={1.2}
                            spaceBetween={5}
                            autoplay={{ delay: 30000 }}
                            navigation
                            pagination={false}
                        >
                            <SwiperSlide className="!flex justify-center !p-5 ">
                                <ServiceCard />
                            </SwiperSlide>
                            <SwiperSlide className="!flex justify-center !p-5">
                                <ServiceCard />
                            </SwiperSlide>
                            <SwiperSlide className="!flex justify-center !p-5">
                                <ServiceCard />
                            </SwiperSlide>
                            <SwiperSlide className="!flex justify-center !p-5">
                                <ServiceCard />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
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
