import { SearchIcon } from '@/components/ui/Icon/Icon';
import styles from '@/components/ui/Search/Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Search = () => {
    return (
        <div className={cx('search-wrapper')}>
            <div className={cx('input')}>
                <input type="text" placeholder="Tìm kiếm..." />
            </div>
            <div className={cx('icon')}>{<SearchIcon />}</div>
        </div>
    );
};

export default Search;
