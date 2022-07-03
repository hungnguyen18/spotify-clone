import React from 'react';
import classNames from 'classnames/bind';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import styles from './Header.module.scss';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header__container')}>
            <div className={cx('header__search')}>
                <Search />
            </div>

            <div className={cx('header__info')}>
                <span>Hung Nguyen</span>
                <div className={cx('header__avatar')}>
                    <Avatar icon={<UserOutlined />} />
                </div>
            </div>
        </div>
    );
}

export default Header;
