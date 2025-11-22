import styles from '@/components/layout/Header/Header.module.scss';
import Button from '@/components/ui/Button/Button';
import Search from '@/components/ui/Search/Search';
import { PATH_CONFIG } from '@/configs/path-config';
import logo from '@public/logo/viettel-logo.svg';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('logo')}>
                <Link
                    href={PATH_CONFIG.home}
                    title="Tổng đài lắp đặt Internet Viettel - Lắp đặt Wifi Viettel, Internet Viettel, Truyền hình TV360 Viettel"
                >
                    <Image src={logo} alt="Viettel Logo" />
                </Link>
            </div>
            <div className={cx('search')}>
                <Search />
            </div>
            <div className={cx('btn-contact')}>
                <Button primary>097-231-9556</Button>
            </div>
        </div>
    );
};

export default Header;
