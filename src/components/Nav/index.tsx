import className from 'classnames/bind';

import styles from './Nav.module.scss';

const cx = className.bind(styles);

export default function Nav() {
    return <div className={cx('wrapper')}>Nav</div>;
}
