import styles from '@/components/layout/(client)/Navbar/Navbar.module.scss';
import { PATH_CONFIG } from '@/configs/path-config';
import { IconDeviceSim, IconDeviceTv, IconHome, IconNews, IconPhoneRinging, IconWorld } from '@tabler/icons-react';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(styles);

const Navbar = () => {
    return (
        <div className={cx('nav-bar-wrapper', 'hidden md:block bg-primary')}>
            <div className={cx('nav-bar-container', 'flex justify-center items-center min-h-[3rem]')}>
                <ul className="flex flex-wrap lg:justify-between justify-center items-center gap-10 text-white w-[80%] md:p-2">
                    <li className="flex items-center gap-5 cursor-pointer hover:text-gray-200 transition whitespace-nowrap font-semibold text-lg">
                        <Link href={PATH_CONFIG.trangChu} className="gap-2 flex items-center">
                            <div className="icon">
                                <IconHome width={'2rem'} height={'2rem'} />
                            </div>
                            <div className="title">TRANG CHỦ</div>
                        </Link>
                    </li>
                    <li className="flex items-center gap-5 cursor-pointer hover:text-gray-200 transition whitespace-nowrap font-semibold text-lg">
                        <Link href={PATH_CONFIG.internet} className="gap-2 flex items-center">
                            <div className="icon">
                                <IconWorld width={'2rem'} height={'2rem'} />
                            </div>
                            <div className="title">INTERNET</div>
                            {/* <IconChevronCompactDown width={'1.5rem'} height={'1.5rem'} /> */}
                        </Link>
                    </li>

                    <li className="flex items-center gap-5 cursor-pointer hover:text-gray-200 transition whitespace-nowrap font-semibold text-lg">
                        <Link href={PATH_CONFIG.truyenHinh} className="gap-2 flex items-center">
                            <div className="icon">
                                <IconDeviceTv width={'2rem'} height={'2rem'} />
                            </div>
                            <div className="title">TRUYỀN HÌNH</div>
                            {/* <IconChevronCompactDown width={'1.5rem'} height={'1.5rem'} /> */}
                        </Link>
                    </li>

                    <li className="flex items-center gap-5 cursor-pointer hover:text-gray-200 transition whitespace-nowrap font-semibold text-lg">
                        <Link href={PATH_CONFIG.diDong} className="gap-2 flex items-center">
                            <div className="icon">
                                <IconDeviceSim width={'2rem'} height={'2rem'} />
                            </div>
                            <div className="title">DI ĐỘNG</div>
                            {/* <IconChevronCompactDown width={'1.5rem'} height={'1.5rem'} /> */}
                        </Link>
                    </li>

                    <li className="flex items-center gap-5 cursor-pointer hover:text-gray-200 transition whitespace-nowrap font-semibold text-lg">
                        <Link href={PATH_CONFIG.tinTuc} className="gap-2 flex items-center">
                            <div className="icon">
                                <IconNews width={'2rem'} height={'2rem'} />
                            </div>
                            <div className="title">TIN TỨC</div>
                            {/* <IconChevronCompactDown width={'1.5rem'} height={'1.5rem'} /> */}
                        </Link>
                    </li>

                    <li className="flex items-center gap-5 cursor-pointer hover:text-gray-200 transition whitespace-nowrap font-semibold text-lg">
                        <Link href={PATH_CONFIG.lineHe} className="gap-2 flex items-center">
                            <div className="icon">
                                <IconPhoneRinging width={'2rem'} height={'2rem'} />
                            </div>
                            <div className="title">LIÊN HỆ</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
