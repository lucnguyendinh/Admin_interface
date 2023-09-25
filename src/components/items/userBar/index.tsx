'use client';
import classNames from 'classnames/bind';

import Img from '@/components/items/img';
import Ic from '@/components/items/icon';
import styles from './userBar.module.scss';
import { User } from '@/app/(default)/page';
import noAvt from '@/public/non-avt.jpg';
import { useState } from 'react';

const cx = classNames.bind(styles);

export default function Userbar(props: User) {
    const { idUser, avtImg, fullName, sex } = props;
    const [currentStatus, setCurrentStatus] = useState(idUser.currentStatus);

    const handleClick = async (option: number) => {
        // const newP = {
        //     idAdmin: '647d87d08c96dc38f21b90b6',
        //     idUser: '647d89418c96dc38f21b90fe',
        //     code: 3,
        // };
        const newP = {
            idAdmin: '647d87d08c96dc38f21b90b6',
            idUser: idUser._id,
            code: option,
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': token,
            },
            body: JSON.stringify(newP),
        };
        try {
            await fetch('http://localhost:8000/admin/editeserrights', requestOptions);
            setCurrentStatus(option);
        } catch (err) {
            console.log(err);
        }
    };
    const option: {
        title: string;
        code: number;
    }[] = [
        {
            title: 'Khóa tài khoản',
            code: 3,
        },
        {
            title: 'Hạn chế tài khoản',
            code: 2,
        },
        {
            title: 'Khôi phục',
            code: 1,
        },
        {
            title: 'Cấp quyền admin',
            code: 4,
        },
    ].filter((o) => {
        return o.code !== currentStatus;
    });

    return (
        <div className={cx('item-user')}>
            <div className={cx('avt-name')}>
                <Img src={avtImg?.url || noAvt} alt="anh-dep" width={50} height={50} />
                <h4 className={cx('name')}>{fullName}</h4>
            </div>
            <p className={cx('sex')}>{sex}</p>
            <h4 className={cx('status')}>
                {currentStatus === 3 ? 'Tài khoản bị khóa' : currentStatus === 2 ? 'Tài khoản bị hạn chế' : 'Hoạt động'}
            </h4>
            <div className={cx('icon')}>
                <Ic icon="iwwa:option" />
                <div className={cx('togle')}>
                    <div className={cx('name-id')}>
                        {fullName} - {idUser._id}
                    </div>
                    {option.map((o) => {
                        return (
                            <div key={o.code} className={cx('option')} onClick={() => handleClick(o.code)}>
                                {o.title}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
