import classNames from 'classnames/bind';

import styles from './Notification.module.scss';
import PageNumber from '@/components/items/pageNumber';
import Img from '@/components/items/img';
import Link from 'next/link';
import timeDefault from '@/config/timeDefault';

const cx = classNames.bind(styles);

type DataN = {
    option: number;
    idRp: string;
    idU: {
        avtImg: {
            public_id: string;
            url: string;
        };
        fullName: string;
    };
    createdAt: string;
}[];

export default async function Notification() {
    const res = await fetch(`http://localhost:8000/admin/report`, { cache: 'no-store' });
    const dataNotifi: DataN = await res.json();

    const handleOption = (option: number) => {
        if (option === 1) {
            return {
                option: 'người dùng',
                url: 'http://localhost:3001/profile',
            };
        } else if (option === 2) {
            return {
                option: 'bài viết',
                url: 'http://localhost:3001/status',
            };
        } else if (option === 3) {
            return {
                option: 'bình luận',
                url: '/notification/comment',
            };
        } else {
            return {
                option: 'other',
                url: '/notification/other',
            };
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h1>Notification</h1>
            <div className={cx('container')}>
                {dataNotifi.map((d, i: any) => {
                    const o = handleOption(d.option);
                    return (
                        <Link href={`${o.url}/${d.idRp}`} target="_blank" key={i}>
                            <div className={cx('item-notification')}>
                                <Img src={d.idU.avtImg.url} alt="anh-dep" width={50} height={50} />
                                <div className={cx('content')}>
                                    <p>
                                        {d.idU.fullName} vua report 1 {o.option}
                                    </p>
                                    <p>{timeDefault((Date.now() - Date.parse(d?.createdAt)) / 1000)}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            {/* <PageNumber /> */}
        </div>
    );
}
