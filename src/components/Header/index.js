import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';

import styles from './Header.module.scss';
import Search from '../Search';
import apiClient from '../../spotify';
import { ArrowDownIcon, ArrowUpIcon } from '../Icon';

const cx = classNames.bind(styles);

function Header({ shrink }) {
    const [infoUser, setInfoUser] = useState({});
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        apiClient.get('me').then((response) => {
            setInfoUser(response.data);

            setAvatar(response.data.images[0].url);
        });
    }, []);

    return (
        <div className={cx('header__container', shrink)}>
            <div className={cx('header__search')}>{/* <Search /> */}</div>

            <div className={cx('header__info')}>
                <div className={cx('header__avatar')}>
                    <Avatar size={28} src={avatar} icon={<UserOutlined />} />
                </div>

                <span>{infoUser.display_name}</span>

                <ArrowDownIcon className={cx('icon-down')} />
                <ArrowUpIcon className={cx('icon-up')} />
            </div>
        </div>
    );
}

export default Header;
