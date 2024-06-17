'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import classNames from 'classnames/bind';

import styles from './pageNumber.module.scss';

const cx = classNames.bind(styles);

type Props = {
    totalPages: number;
    page: string;
};

export default function PageNumber(props: Props) {
    const { totalPages = 1, page } = props;
    const router = useRouter();

    const handleBeforePage = () => {
        if (+page <= 1) return;
        router.push(`?page=${+page - 1}`, { scroll: false });
    };
    const handleAfterPage = () => {
        if (+page >= totalPages) return;
        router.push(`?page=${+page + 1}`, { scroll: false });
    };

    return (
        <div className={cx('page')}>
            <div className={cx('before')} onClick={handleBeforePage}>
                Trang trước
            </div>
            <div className={cx('after')} onClick={handleAfterPage}>
                Trang sau
            </div>
        </div>
    );
}
