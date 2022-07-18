import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './Header.module.scss';
import SearchInput from '../SearchInput';
import User from './User';
import Button from '../Button';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icon';
import { Col, Row } from 'antd';
import MenuLibrary from '../MenuLibrary';

const cx = classNames.bind(styles);

function Header({ shrink }) {
    const [locationMenu, setLocationMenu] = useState('playlists');

    const location = useLocation();

    const pathMenu =
        location.pathname === '/collection/playlists'
            ? '/collection/playlists'
            : `/collection/${locationMenu}`;

    const handleSetLocationMenu = (nameLocation) => {
        setLocationMenu(nameLocation);
    };

    return (
        <div className={cx('header__container', shrink)}>
            <div className={cx('header__act')}>
                <Button icon>
                    <ArrowLeftIcon />
                </Button>
                <Button icon disabled>
                    <ArrowRightIcon />
                </Button>
            </div>

            {location.pathname === '/search' && (
                <div className={cx('header__wrapper')}>
                    <Row>
                        <Col xl={24} md={24} span={0}>
                            <SearchInput />
                        </Col>
                    </Row>
                </div>
            )}

            {location.pathname === pathMenu && (
                <div className={cx('header__wrapper')}>
                    <Row>
                        <Col xl={24} md={24} span={0}>
                            <MenuLibrary
                                handleSetLocationMenu={handleSetLocationMenu}
                            />
                        </Col>
                    </Row>
                </div>
            )}

            <div className={cx('header__user')}>
                {(location.pathname === '/' ||
                    location.pathname === '/playlist') && (
                    <div className={cx('header__btn')}>
                        <Button outline>Upgrade</Button>
                    </div>
                )}

                <User />
            </div>
        </div>
    );
}

export default Header;
