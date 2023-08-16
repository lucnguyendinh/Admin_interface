import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Ic from '../items/icon';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('brand')}>
                <h2>Admin interface</h2>
            </div>
            <div className={cx('container')}>
                <div className={cx('option')}>
                    <Ic icon="ci:hamburger-lg" width="35" height="35" />
                </div>
                <div className={cx('search-and-logout')}>
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search for..." />
                        <Ic
                            color="#ffffff"
                            className={cx('icon-search')}
                            icon="material-symbols:search"
                            width="35"
                            height="35"
                        />
                    </div>
                    <div className={cx('logout')}>
                        <h3>Đăng xuất</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
