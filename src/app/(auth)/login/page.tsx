'use client';
import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        try {
            const admin = {
                phoneNumber,
                password,
            };
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': token,
                },
                body: JSON.stringify(admin),
            };
            const res = await fetch('http://localhost:8000/admin/login', requestOptions);
            const dataAdmin: any = await res.json();
            console.log(dataAdmin);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('input')}>
                    <input
                        className={cx('input-l')}
                        type="text"
                        placeholder="Số điện thoại"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        className={cx('input-l')}
                        type="password"
                        placeholder="Mật khẩu"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className={cx('btn-l')} onClick={handleLogin}>
                        Đăng nhập
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
