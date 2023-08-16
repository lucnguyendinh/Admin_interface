'use client';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

import Img from '@/components/items/img';
import Ic from '@/components/items/icon';
import styles from './userBar.module.scss';

const cx = classNames.bind(styles);

export default function Userbar() {
    const [togle, setTogle] = useState<Boolean>(false);
    let timeOut = useRef<any>(null);

    return (
        <div className={cx('item-user')}>
            <div className={cx('avt-name')}>
                <Img
                    src="https://res.cloudinary.com/dn7tkpnp3/image/upload/v1688440684/imgAvt/wqpja37fwxjfkihue5rd.png"
                    alt="anh-dep"
                    width={50}
                    height={50}
                />
                <h4 className={cx('name')}>Nguyen Dinh Luc</h4>
            </div>
            <p>Nam</p>
            <p>506 point</p>
            <h4>Tốt</h4>
            <div
                onMouseMove={() => {
                    clearTimeout(timeOut.current);
                    setTogle(true);
                }}
                onMouseOut={() => {
                    timeOut.current = setTimeout(() => {
                        setTogle(false);
                    }, 200);
                }}
                className={cx('icon')}
            >
                <Ic icon="iwwa:option" />
                {togle && (
                    <div className={cx('togle')}>
                        <div className={cx('name-id')}>Nguyen Dinh Luc - 2832hs3dfas</div>
                        <div className={cx('option')}>Khóa tài khoản</div>
                        <div className={cx('option')}>Khôi phục</div>
                        <div className={cx('option')}>Cấp quyền admin</div>
                    </div>
                )}
            </div>
        </div>
    );
}
