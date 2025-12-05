'use client';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ServiceCard from '@/components/ui/ServiceCard/ServiceCard';
import slideShowImg1 from '@public/images/slide-show-1.png';
import slideShowImg2 from '@public/images/slide-show-2.png';

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
            <div className="home-container pt-[2rem] w-[100%] ">
                <div className="hero-title text-center flex justify-center items-center text-black h-[7rem] mx-auto">
                    <h1 className="w-200 px-[1.5rem]">
                        <strong className="sm:text-2xl md:text-3xl lg:text-4xl">
                            Viettel <span className="text-primary">Cần Thơ</span> – Nhà cung cấp dịch vụ di động,
                            internet, truyền hình và giải pháp CNTT
                        </strong>
                    </h1>
                </div>
                <div className="w-full flex justify-center pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[900px] w-full px-4">
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

                {/* <div className=""></div> */}
                {/* <div className="featured-products">
                    <h2 className="text-4xl text-center font-bold mb-4 text-black">SẢN PHẨM NỔI BẬT</h2>
                </div> */}
            </div>
        </div>
    );
};

export default Home;
