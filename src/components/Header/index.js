import React, { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';

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
                    <Tooltip
                        placement="bottomRight"
                        trigger={'click'}
                        color={'#fff'}
                        title={() => (
                            <div className={cx('menu')}>
                                <div className={cx('menu__title')}>
                                    <span>Setting</span>
                                </div>
                                <div className={cx('menu__action')}>
                                    <div className={cx('menu__item')}>
                                        <LogoutOutlined
                                            className={cx('menu__icon')}
                                        />
                                        Log out
                                    </div>
                                </div>
                            </div>
                        )}
                    >
                        <Avatar icon={<UserOutlined />} />
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}

export default Header;
