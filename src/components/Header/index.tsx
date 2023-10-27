'use client';

import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Ic from '../items/icon';
import { useEffect, useState } from 'react';
import noAvt from '@/public/non-avt.jpg';

import Img from '../items/img';
import useDebounce from '@/hook/useDebounce';

const cx = classNames.bind(styles);

type User = {
    idUser: string;
    fullName: string;
    avtImg: {
        url: string;
    };
};

export default function Header() {
    const [search, setSearch] = useState('');
    const [dataUser, setDataUser] = useState<User[]>([]);

    const debounce = useDebounce(search, 500);

    useEffect(() => {
        const searchByName = async () => {
            try {
                const res = await fetch(
                    `http://localhost:8000/admin/searchbyname?name=${encodeURIComponent(debounce)}`,
                    {
                        cache: 'no-store',
                    },
                );
                // setDataUser(await res.json());
                const data = await res.json();
                return data;
            } catch (err) {
                console.log(err);
            }
        };
        const searchById = async () => {
            try {
                const res = await fetch(`http://localhost:8000/admin/searchbyid?id=${encodeURIComponent(debounce)}`, {
                    cache: 'no-store',
                });
                const data = await res.json();
                return data;
            } catch (err) {
                console.log(err);
            }
        };
        const mergeData = async () => {
            const listUserName = await searchByName();
            const listUserId = await searchById();
            console.log({ listUserName, listUserId });

            setDataUser([...listUserName, ...listUserId]);
        };
        if (!debounce.trim()) {
            setDataUser([]);
            return;
        }
        if (debounce) mergeData();
    }, [debounce]);

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
                        <input
                            type="text"
                            placeholder="Search for..."
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                        <Ic
                            color="#ffffff"
                            className={cx('icon-search')}
                            icon="material-symbols:search"
                            width="35"
                            height="35"
                        />
                        {dataUser.length > 0 && (
                            <div className={cx('tab-search')}>
                                {dataUser?.map((d, i) => {
                                    return (
                                        <div className={cx('user-item')} key={i}>
                                            <Img src={d?.avtImg?.url || noAvt} alt="anh-dep" width={50} height={50} />
                                            <div className={cx('name-id')}>
                                                <h4 className={cx('name')}>{d?.fullName}</h4>
                                                <p className="id">{d?.idUser}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div className={cx('logout')}>
                        <h3>Đăng xuất</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
