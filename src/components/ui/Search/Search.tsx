import { SearchIcon } from '@/components/ui/Icon/Icon';
import styles from '@/components/ui/Search/Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProps {
    button?: boolean;
    input?: boolean;
    onClick?: () => void;
}
const Search = ({ button = false, input = false, onClick }: IProps) => {
    return (
        <div
            className={cx('search-wrapper', {
                button,
            })}
        >
            {input && (
                <div className={cx('input')}>
                    <input type="text" placeholder="Tìm kiếm..." />
                </div>
            )}
            <div
                className={cx('icon', {
                    button,
                })}
                onClick={onClick}
            >
                {<SearchIcon />}
            </div>
        </div>
    );
};

export default Search;
