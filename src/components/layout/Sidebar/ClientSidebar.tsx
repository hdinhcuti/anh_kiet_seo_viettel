'use client';

import Search from '@/components/ui/Search/Search';
import { PATH_CONFIG } from '@/configs/path-config';
import {
    IconBriefcase,
    IconChevronCompactDown,
    IconDeviceSim,
    IconDeviceTv,
    IconNews,
    IconPhoneRinging,
    IconWorld,
} from '@tabler/icons-react';
import Link from 'next/link';

export default function ClientSidebar({ isOpen, onClose }: any) {
    return (
        <>
            <div
                className={`
                    fixed top-0 left-0 h-full w-[260px] bg-primary z-[9999]
                    transition-transform duration-300
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                `}
            >
                <div className="p-3 pb-7 pt-4 border-b-2 border-white flex justify-between gap-5 bg-primary">
                    <div>
                        <Search input />
                    </div>
                    <button onClick={onClose} className="text-white">
                        ✕
                    </button>
                </div>

                <nav className="flex flex-col gap-4 text-lg font-medium">
                    <ul>
                        <li className="p-4">
                            <Link
                                href={PATH_CONFIG.internet}
                                className="gap-2 flex items-center justify-between align-center"
                            >
                                <div className="menu-item w-[80%] flex align-center gap-2">
                                    <div className="icon text-white">
                                        <IconWorld width={'2rem'} height={'2rem'} />
                                    </div>
                                    <div className="title text-white">INTERNET</div>
                                </div>
                                <IconChevronCompactDown width={'1.5rem'} height={'1.5rem'} />
                            </Link>
                        </li>
                        <li className="p-4 border-t-2 border-white">
                            <Link
                                href={PATH_CONFIG.tivi}
                                className="gap-2 flex items-center justify-between align-center"
                            >
                                <div className="menu-item w-[80%] flex align-center gap-2">
                                    <div className="icon text-white">
                                        <IconDeviceTv width={'2rem'} height={'2rem'} />
                                    </div>
                                    <div className="title text-white">TIVI</div>
                                </div>
                                <IconChevronCompactDown width={'1.5rem'} height={'1.5rem'} />
                            </Link>
                        </li>
                        <li className="p-4 border-t-2 border-white">
                            <Link
                                href={PATH_CONFIG['smart-phone']}
                                className="gap-2 flex items-center justify-between align-center"
                            >
                                <div className="menu-item w-[80%] flex align-center gap-2">
                                    <div className="icon text-white">
                                        <IconDeviceSim width={'2rem'} height={'2rem'} />
                                    </div>
                                    <div className="title text-white">DI ĐỘNG</div>
                                </div>
                                <IconChevronCompactDown width={'1.5rem'} height={'1.5rem'} />
                            </Link>
                        </li>
                        <li className="p-4 border-t-2 border-white">
                            <Link
                                href={PATH_CONFIG.business}
                                className="gap-2 flex items-center justify-between align-center"
                            >
                                <div className="menu-item w-[80%] flex align-center gap-2">
                                    <div className="icon text-white">
                                        <IconBriefcase width={'2rem'} height={'2rem'} />
                                    </div>
                                    <div className="title text-white">DOANH NGHIỆP</div>
                                </div>
                            </Link>
                        </li>
                        <li className="p-4 border-t-2 border-white">
                            <Link
                                href={PATH_CONFIG['news-paper']}
                                className="gap-2 flex items-center justify-between align-center"
                            >
                                <div className="menu-item w-[80%] flex align-center gap-2">
                                    <div className="icon text-white">
                                        <IconNews width={'2rem'} height={'2rem'} />
                                    </div>
                                    <div className="title text-white">TIN TỨC</div>
                                </div>
                                <IconChevronCompactDown width={'1.5rem'} height={'1.5rem'} />
                            </Link>
                        </li>
                        <li className="p-4 border-t-2 border-white">
                            <Link
                                href={PATH_CONFIG.contact}
                                className="gap-2 flex items-center justify-between align-center"
                            >
                                <div className="menu-item w-[80%] flex align-center gap-2">
                                    <div className="icon text-white">
                                        <IconPhoneRinging width={'2rem'} height={'2rem'} />
                                    </div>
                                    <div className="title text-white">LIÊN HỆ</div>
                                </div>
                                <IconChevronCompactDown width={'1.5rem'} height={'1.5rem'} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                className={`
                    fixed inset-0 w-full h-full bg-[#a8a8a8] z-[9998]
                    transition-opacity duration-200
                    ${isOpen ? 'opacity-60' : 'opacity-0 pointer-events-none'}
                `}
                onClick={onClose}
            />
        </>
    );
}
