'use client';
import { useRouter } from 'next/navigation';
import classNames from 'classnames/bind';

import styles from './pageNumber.module.scss';

const cx = classNames.bind(styles);

type Props = {
    totalPages: number | undefined;
    page: string;
};

export default function PageNumber(props: Props) {
    const { totalPages, page } = props;
    const router = useRouter();

    let pageActive;
    if (pageActive !== null) {
        pageActive = parseInt(page);
    }

    let items = [];
    if (totalPages) {
        for (let i = 1; i <= totalPages; i++) {
            items.push(
                <div
                    onClick={() => router.push(`?page=${i}`, { scroll: false })}
                    key={i}
                    className={cx('page-number', {
                        active: pageActive === i,
                    })}
                >
                    <p>{i}</p>
                </div>,
            );
        }
    }

    return <div className={cx('page')}>{items}</div>;
}
