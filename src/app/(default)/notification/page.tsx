import classNames from 'classnames/bind';

import styles from './Notification.module.scss';
import PageNumber from '@/components/items/pageNumber';
import Img from '@/components/items/img';

const cx = classNames.bind(styles);

export default function Notification() {
    return (
        <div className={cx('wrapper')}>
            <h1>Notification</h1>
            <div className={cx('container')}>
                <div className={cx('item-notification')}>
                    <Img
                        src="https://res.cloudinary.com/dn7tkpnp3/image/upload/v1688440684/imgAvt/wqpja37fwxjfkihue5rd.png"
                        alt="anh-dep"
                        width={50}
                        height={50}
                    />
                    <div className={cx('content')}>
                        <p>Nguyen Dinh Luc vua report 1 bai viet</p>
                        <p>10 Ngay truoc</p>
                    </div>
                </div>
            </div>
            <PageNumber />
        </div>
    );
}
