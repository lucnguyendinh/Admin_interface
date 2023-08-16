'use client';
import className from 'classnames/bind';
import { usePathname } from 'next/navigation';

import styles from './Nav.module.scss';
import Ic from '../items/icon';
import Link from 'next/link';

const cx = className.bind(styles);

export default function Nav() {
    const pathname = usePathname();

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('core')}>core</h3>
            <Link href="/">
                <div
                    className={cx('dashboard', {
                        active: pathname === '/',
                    })}
                >
                    <Ic className={cx('icon')} width="25" height="25" icon="clarity:dashboard-solid-badged" />
                    <p>Dashboard</p>
                </div>
            </Link>
            <h3>INTERFACE</h3>
            <Link href="/history">
                <div
                    className={cx('history', {
                        active: pathname === '/history',
                    })}
                >
                    <Ic className={cx('icon')} width="25" height="25" icon="ic:outline-history" />
                    <p>History</p>
                </div>
            </Link>
            <Link href="/notification">
                <div
                    className={cx('notification', {
                        active: pathname === '/notification',
                    })}
                >
                    <Ic className={cx('icon')} width="25" height="25" icon="carbon:notification-filled" />
                    <p>Notification</p>
                </div>
            </Link>
        </div>
    );
}
