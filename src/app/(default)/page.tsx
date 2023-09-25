'use client';
import { useSearchParams } from 'next/navigation';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import PageNumber from '@/components/items/pageNumber';
import Userbar from '@/components/items/userBar';
import { useEffect, useState } from 'react';

export type User = {
    idUser: {
        _id: string;
        currentStatus: number;
    };
    avtImg: {
        url: string;
    };
    fullName: string;
    sex: string;
};

type Data = {
    users: User[];
    totalPages: number;
};

const cx = classNames.bind(styles);

export default function Page() {
    const searchParams = useSearchParams();
    const [dataUser, setDataUser] = useState<Data>();

    const page = searchParams.get('page') || '1';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:8000/admin/getalluser?page=${page}`, { cache: 'no-store' });
                setDataUser(await res.json());
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [page]);

    return (
        <div className={cx('wrapper')}>
            <h1>Dashboard</h1>
            <div className={cx('container')}>
                {dataUser?.users?.map((d, i) => {
                    return <Userbar idUser={d.idUser} avtImg={d.avtImg} fullName={d.fullName} sex={d.sex} key={i} />;
                })}
            </div>
            <PageNumber totalPages={dataUser?.totalPages} page={page} />
        </div>
    );
}
