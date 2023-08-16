import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import PageNumber from '@/components/items/pageNumber';
import Userbar from '@/components/items/userBar';

const cx = classNames.bind(styles);

export default function Page() {
    return (
        <div className={cx('wrapper')}>
            <h1>Dashboard</h1>
            <div className={cx('container')}>
                <Userbar />
                <Userbar />
                <Userbar />
            </div>
            <PageNumber />
        </div>
    );
}
