import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Avatar, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from './User.module.scss';
import {
    ArrowDownIcon,
    ArrowUpIcon,
    ShortcutIcon,
} from '../../../components/Icon';
import spotifyApi from '../../../api/spotifyApi';
import Popper from '../../../components/Popper';

const cx = classNames.bind(styles);

function User() {
    const [infoUser, setInfoUser] = useState({});
    const [avatar, setAvatar] = useState('');
    const [effect, setEffect] = useState({
        backgroundColor: '',
        iconUp: 'none',
        iconDown: 'block',
    });

    const dataMenuPopper = [
        {
            id: 1,
            name: 'Account',
            icon: <ShortcutIcon />,
            onClick: () => {},
        },
        {
            id: 2,
            name: 'Profile',
            icon: null,
            onClick: () => {},
        },
        {
            id: 3,
            name: 'Upgrade to Premium',
            icon: <ShortcutIcon />,
            onClick: () => {},
        },
        {
            id: 4,
            name: 'Support',
            icon: <ShortcutIcon />,
            onClick: () => {},
        },
        {
            id: 5,
            name: 'Download',
            icon: <ShortcutIcon />,
            onClick: () => {},
        },
        {
            id: 6,
            name: 'Log out',
            icon: null,
            onClick: () => {
                window.localStorage.removeItem('token');
                window.location.reload();
            },
        },
    ];

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
        <Popper
            data={dataMenuPopper}
            handleShowIcon={handleShowIcon}
            handleHideIcon={handleHideIcon}
            offset={[-20, 10]}
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
        </Popper>
    );
}

export default memo(User);
