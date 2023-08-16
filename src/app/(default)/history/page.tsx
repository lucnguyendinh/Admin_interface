import classNames from 'classnames/bind';

import styles from './History.module.scss';
import PageNumber from '@/components/items/pageNumber';
import Img from '@/components/items/img';

const cx = classNames.bind(styles);

export default function History() {
    return (
        <div className={cx('wrapper')}>
            <h1>History</h1>
            <div className={cx('container')}>
                <div className={cx('item-history')}>
                    <div className={cx('admin')}>
                        <Img
                            src="https://res.cloudinary.com/dn7tkpnp3/image/upload/v1688440684/imgAvt/wqpja37fwxjfkihue5rd.png"
                            alt="anh-dep"
                            width={50}
                            height={50}
                        />
                        <h4 className={cx('name')}>Nguyen Dinh Luc</h4>
                    </div>
                    <div className={cx('user-info')}>
                        <div className={cx('name-user')}>
                            <h4>Nguyen Dinh Luc</h4>
                        </div>
                        <div className={cx('id-user')}>
                            <p>102398u4naskd</p>
                        </div>
                    </div>
                    <div className={cx('operation')}>
                        <p>Khoa tai khoan</p>
                    </div>
                    <div className={cx('time')}>
                        <p>10/08/23-23:05</p>
                    </div>
                    <div className={cx('undo')}>
                        <p>Hoàn tác</p>
                    </div>
                </div>
            </div>
            <PageNumber />
        </div>
    );
}
