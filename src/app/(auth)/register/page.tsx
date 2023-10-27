import React from 'react';
import classNames from 'classnames/bind';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}></div>
        </div>
    );
};

export default Page;
