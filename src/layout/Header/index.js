import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { Col, Row } from 'antd';

import styles from './Header.module.scss';
import SearchInput from './SearchInput';
import User from './User';
import Button from '../../components/Button';
import { ArrowLeftIcon, ArrowRightIcon, PlayIcon } from '../../components/Icon';
import MenuLibrary from './MenuLibrary';
import { dataContext } from '../../utils/DataProvider';

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

    const PlaylistContext = useContext(dataContext);

    // console.log(PlaylistContext);

    return (
        <div className={cx('header__container', shrink.shrink)}>
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

            {location.pathname === `/playlist/${location.state?.id}` &&
                shrink.shrinkPlay && (
                    <div className={cx('header__wrapper')}>
                        <div className={cx('header__playlist')}>
                            <Button play small className={cx('header__play')}>
                                <PlayIcon />
                            </Button>

                            <span className={cx('header__title')}>
                                {PlaylistContext?.dataHeader?.name}
                            </span>
                        </div>
                    </div>
                )}

            <div className={cx('header__user')}>
                {(location.pathname === '/' ||
                    location.pathname ===
                        `/playlist/${location.state?.id}`) && (
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
