import classNames from 'classnames/bind';

import styles from './pageNumber.module.scss';

const cx = classNames.bind(styles);

export default function PageNumber() {
    return (
        <div className={cx('page')}>
            <div className={cx('page-number', 'active')}>
                <p>1</p>
            </div>
            <div className={cx('page-number')}>
                <p>2</p>
            </div>
            <div className={cx('page-number')}>
                <p>3</p>
            </div>
            <div className={cx('page-number')}>
                <p>4</p>
            </div>
            <div className={cx('page-number')}>
                <p>5</p>
            </div>
        </div>
    );
}
