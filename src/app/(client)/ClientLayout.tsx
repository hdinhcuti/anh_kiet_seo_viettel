'use client';

import HeaderGroup from '@/components/layout/client/Header/HeaderGroup';
// import HeaderGroup from '@/components/layout/Header/HeaderGroup';
// import Footer from '@/components/layout/Footer/Footer';
import Sidebar from '@/components/layout/client/Sidebar/Sidebar';
import { PATH_CONFIG } from '@/configs/path-config';
import phoneCall from '@public/logo/phone-call.svg';
import zaloLogo from '@public/logo/zalo-logo.svg';
import { IconMailShare } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
export default function ClientLayout({ children }: any) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [autoShown, setAutoShown] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useLayoutEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        return () => window.removeEventListener('resize', updateHeaderHeight);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setHidden(false);
                setAutoShown(false);
                return;
            }

            if (autoShown) return;
            setHidden(true);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [autoShown]);

    useEffect(() => {
        const query = window.matchMedia('(min-width: 640px)');

        const updateState = () => setSidebarOpen((prev) => false);

        updateState();
        query.addEventListener('change', updateState);

        return () => query.removeEventListener('change', updateState);
    }, []);

    return (
        <>
            {isSidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
                    aria-hidden="true"
                />
            )}

            <HeaderGroup ref={headerRef} onOpenSidebar={() => setSidebarOpen((prev) => !prev)} />

            <aside>
                <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            </aside>

            <main style={{ paddingTop: headerHeight }}>
                <div className="contact-btn fixed bottom-10 left-5 flex flex-col gap-10 z-9997 ">
                    <a
                        href="https://zalo.me/0987654321"
                        target="_blank"
                        className="relative flex items-center justify-center"
                    >
                        <span className="absolute w-12 h-12 rounded-full bg-sky-400 opacity-50 animate-ping"></span>
                        <span className="absolute w-12 h-12 rounded-full bg-sky-400 opacity-50 animate-ping"></span>

                        <div className="zalo-btn w-12 h-12 rounded-full shadow-lg bg-white flex items-center justify-center relative overflow-hidden">
                            <Image src={zaloLogo} alt="Zalo Logo" className="w-8 h-8 object-contain" />
                        </div>
                    </a>

                    <a href="tel:0987654321" className="relative flex items-center justify-center">
                        <span className="absolute w-12 h-12 rounded-full bg-primary opacity-50 animate-ping"></span>
                        <span className="absolute w-12 h-12 rounded-full bg-primary opacity-50 animate-ping"></span>

                        <div className="phone-btn w-12 h-12 rounded-full shadow-lg bg-primary flex items-center justify-center text-white animate-phoneRing">
                            <Image src={phoneCall} alt="Phone call Logo" className="w-7 h-7 object-contain" />
                        </div>
                    </a>

                    <Link href={PATH_CONFIG.lineHe} className="relative flex items-center justify-center">
                        <span className="absolute w-12 h-12 rounded-full bg-primary opacity-50 animate-ping"></span>
                        <span className="absolute w-12 h-12 rounded-full bg-primary opacity-50 animate-ping"></span>
                        <div className="phone-btn w-12 h-12 rounded-full shadow-lg bg-primary flex items-center justify-center text-white">
                            <IconMailShare className="w-7 h-7 text-white" />
                            <div
                                className={`absolute left-15 h-10 w-60 bg-primary text-nowrap rounded-lg text-center text-lg flex items-center justify-center transition-opacity duration-500 [clip-path:polygon(10%_0,100%_0,100%_100%,10%_100%,0_50%)] ps-3
                                     ${hidden ? 'opacity-0' : 'opacity-90'}`}
                            >
                                Hãy để lại thông tin liên hệ
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="">{children}</div>
            </main>

            {/* <footer>
                <Footer />
            </footer> */}
        </>
    );
}
