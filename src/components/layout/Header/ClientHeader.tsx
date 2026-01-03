'use client';
import styles from '@/components/layout/Header/Header.module.scss';
import { ContactIcon, PhoneIcon } from '@/components/ui/Icon/Icon';
import Search from '@/components/ui/Search/Search';
import { PATH_CONFIG } from '@/configs/path-config';
import logo from '@public/logo/viettel-logo.svg';
import { IconMenu2 } from '@tabler/icons-react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

const cx = classNames.bind(styles);

export default function ClientHeader({ onOpenSidebar }: any) {
    return (
        <div className={cx('header-wrapper', 'md:px-2 px-[1.5rem]')}>
            <div className={cx('header-menu', 'flex md:hidden')} onClick={onOpenSidebar}>
                <IconMenu2 color="#ffffffff" />
            </div>
            <div className={cx('logo')}>
                <Link
                    href={PATH_CONFIG.home}
                    title="Tổng đài lắp đặt Internet Viettel - Lắp đặt Wifi Viettel, Internet Viettel, Truyền hình TV360 Viettel"
                >
                    <Image className="object-cover" src={logo} alt="Viettel Logo" />
                </Link>
            </div>
            <div
                className={cx(
                    'header-right',
                    'flex flex-row md:justify-between items-center justify-end md:w-[30rem] w-auto gap-5',
                )}
            >
                <ul className={cx('nav-list', 'flex flex-row gap-[1rem] text-base hidden md:flex')}>
                    <li className="text-gray-500 font-bold">
                        <Link className="flex justify-center items-center gap-1 text-nowrap" href={PATH_CONFIG.contact}>
                            {<ContactIcon />} Liên hệ
                        </Link>
                    </li>
                    <li className="text-gray-500 font-bold">
                        <Link className="flex justify-center items-center gap-1 text-nowrap" href={PATH_CONFIG.phone}>
                            {<PhoneIcon />} 0987654321
                        </Link>
                    </li>
                </ul>
                <div className={cx('search', 'hidden md:flex')}>
                    <Search input />
                </div>
                <div className={cx('search', 'flex md:hidden w-[2.5rem]')}>
                    <Search button onClick={onOpenSidebar} />
                </div>
            </div>
        </div>
    );
}
