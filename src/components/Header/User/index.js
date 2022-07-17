import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Avatar, Col, Row } from 'antd';
import Tippy from '@tippyjs/react/headless';
import { UserOutlined } from '@ant-design/icons';

import styles from './User.module.scss';
import { ArrowDownIcon, ArrowUpIcon, ShortcutIcon } from '../../Icon';
import spotifyApi from '../../../api/spotifyApi';

const cx = classNames.bind(styles);

function User() {
    const [infoUser, setInfoUser] = useState({});
    const [avatar, setAvatar] = useState('');
    const [effect, setEffect] = useState({
        backgroundColor: '',
        iconUp: 'none',
        iconDown: 'block',
    });

    useEffect(() => {
        const getMe = async () => {
            try {
                const res = await spotifyApi.getMe();

                setInfoUser(res);
                setAvatar(res.images[0].url);
            } catch {
                alert('Login Timeout');
                window.localStorage.removeItem('token');
                window.location.reload();
            }
        };

        getMe();
    }, []);

    const handleShowIcon = () => {
        setEffect({
            backgroundColor: '#282828',
            iconUp: 'block',
            iconDown: 'none',
        });
    };

    const handleHideIcon = () => {
        setEffect({
            backgroundColor: '',
            iconUp: 'none',
            iconDown: 'block',
        });
    };

    return (
        <Tippy
            interactive
            trigger="click"
            onShow={handleShowIcon}
            onHide={handleHideIcon}
            offset={[-20, 10]}
            render={(attrs) => (
                <div className={cx('menu__body')} tabIndex="-1" {...attrs}>
                    <Row>
                        <Col xl={0} span={24}>
                            <div className={cx('menu__user')}>
                                <span>{infoUser.display_name}</span>
                            </div>
                        </Col>
                    </Row>

                    <div className={cx('menu__item')}>
                        <span>Account</span>
                        <ShortcutIcon />
                    </div>
                    <div className={cx('menu__item')}>
                        <span>Profile</span>
                    </div>
                    <div className={cx('menu__item')}>
                        <span>Upgrade to Premium</span>
                        <ShortcutIcon />
                    </div>
                    <div className={cx('menu__item')}>
                        <span>Support</span>
                        <ShortcutIcon />
                    </div>
                    <div className={cx('menu__item')}>
                        <span>Download</span>
                        <ShortcutIcon />
                    </div>
                    <div className={cx('menu__item')}>
                        <span>Log out</span>
                    </div>
                </div>
            )}
        >
            <div
                className={cx('user__info')}
                style={{ backgroundColor: effect.backgroundColor }}
            >
                <div className={cx('user__avatar')}>
                    <Avatar size={28} src={avatar} icon={<UserOutlined />} />
                </div>

                <span>
                    <Row>
                        <Col xl={24} span={0}>
                            {infoUser.display_name}
                        </Col>
                    </Row>
                </span>

                <div
                    className={cx('icon-down')}
                    style={{ display: effect.iconDown }}
                >
                    <ArrowDownIcon />
                </div>
                <div
                    className={cx('icon-up')}
                    style={{ display: effect.iconUp }}
                >
                    <ArrowUpIcon />
                </div>
            </div>
        </Tippy>
    );
}

export default memo(User);
