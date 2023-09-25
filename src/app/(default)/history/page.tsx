'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './History.module.scss';
import PageNumber from '@/components/items/pageNumber';

const cx = classNames.bind(styles);
type History = {
    idAdmin: string;
    idUser: string;
    status: number;
    createdAt: string;
};
type Data = {
    history: History[];
    totalPages: number;
};

export default function History() {
    const searchParams = useSearchParams();
    const page: string | number = searchParams.get('page') || '1';
    const [dataHistory, setDataHistory] = useState<Data>();

    useEffect(() => {
        const getHistory = async () => {
            try {
                const res = await fetch(`http://localhost:8000/admin/history?page=${page}`, { cache: 'no-store' });
                setDataHistory(await res.json());
            } catch (err) {
                console.log(err);
            }
        };
        getHistory();
    }, [page]);

    const handleTime = (isoTimeString: string) => {
        // Tạo một đối tượng Date từ chuỗi thời gian ISO 8601
        const date = new Date(isoTimeString);

        // Lấy các thành phần của thời gian
        const day = date.getDate();
        const month = date.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
        const year = date.getFullYear().toString().slice(-2); // Lấy hai chữ số cuối của năm
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // Tạo định dạng mới
        const newDateFormat = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}-${hours
            .toString()
            .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        return newDateFormat;
    };

    return (
        <div className={cx('wrapper')}>
            <h1>History</h1>
            <div className={cx('container')}>
                <div className={cx('item-history')}>
                    <div className={cx('admin')}>
                        <h4 className={cx('id-admin')}>ID ADMIN</h4>
                    </div>
                    <div className={cx('user')}>
                        <h4>ID USER</h4>
                    </div>
                    <div className={cx('operation')}>
                        <p>TRẠNG THÁI</p>
                    </div>
                    <div className={cx('time')}>
                        <p>TIME</p>
                    </div>
                </div>
                {dataHistory?.history?.map((h, i) => {
                    return (
                        <div className={cx('item-history')} key={i}>
                            <div className={cx('admin')}>
                                <h4 className={cx('id-admin')}>{h.idAdmin}</h4>
                            </div>
                            <div className={cx('user')}>
                                <h4>{h.idUser}</h4>
                            </div>
                            <div className={cx('operation')}>
                                <p>
                                    {h.status === 3
                                        ? 'Khóa tài khoản'
                                        : h.status === 2
                                        ? 'Hạn chế tài khoản'
                                        : 'Mở khóa tài khoản'}
                                </p>
                            </div>
                            <div className={cx('time')}>
                                <p>{handleTime(h.createdAt)}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <PageNumber totalPages={dataHistory?.totalPages} page={page} />
        </div>
    );
}
