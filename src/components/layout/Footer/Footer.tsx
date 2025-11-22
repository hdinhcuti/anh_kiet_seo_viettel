import styles from '@/components/layout/Footer/Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => {
    return <div className={cx('footer-wrapper')}>Footer nè</div>;
};

export default Footer;
