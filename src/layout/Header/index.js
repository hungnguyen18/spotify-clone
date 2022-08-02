import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { Col, Row } from 'antd';

import styles from './Header.module.scss';
import SearchInput from './SearchInput';
import User from './User';
import Button from '../../components/Button';
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    PauseLargeIcon,
    PlayIcon,
} from '../../components/Icon';
import MenuLibrary from './MenuLibrary';
import { dataContext } from '../../utils/DataProvider';

const cx = classNames.bind(styles);

function Header({ shrink }) {
    const location = useLocation();

    const pathMenu =
        location.pathname === '/collection/playlists'
            ? '/collection/playlists'
            : `/collection/${location.pathname.slice(12)}`;

    //dataContext
    const playlistContext = useContext(dataContext);
    const bgColor = playlistContext.dataHeader?.bgColor;
    const playlist = playlistContext.dataHeader?.playlist;
    const idHeader = playlistContext.dataHeader?.id;
    const namePlaylist = playlistContext?.dataHeader?.name;

    const isPlaying = playlistContext.dataTrack.isPlaying;
    const idPlaylist = playlistContext.dataPlaylist?.id;

    return (
        <div
            className={cx('header__container', shrink.shrink)}
            style={{
                backgroundColor:
                    location.pathname === `/playlist/${location.state?.id}`
                        ? !!shrink.shrink
                            ? bgColor
                            : 'transparent'
                        : null,
            }}
        >
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
                            <MenuLibrary />
                        </Col>
                    </Row>
                </div>
            )}

            {location.pathname === `/playlist/${location.state?.id}` &&
                shrink.shrinkPlay && (
                    <div className={cx('header__wrapper')}>
                        <div className={cx('header__playlist')}>
                            {isPlaying && idPlaylist === location.state?.id ? (
                                <Button
                                    play
                                    small
                                    className={cx('header__play')}
                                    onClick={() => {
                                        playlistContext.dataPlaylist.funcPlaylist(
                                            idHeader,
                                            namePlaylist,
                                            playlist
                                        );

                                        playlistContext.dataTrack.funcTrack(
                                            0,
                                            playlist[0].track?.id,
                                            playlist[0].track?.type,
                                            false
                                        );
                                    }}
                                >
                                    <PauseLargeIcon
                                        width="2.4rem"
                                        height="2.4rem"
                                    />
                                </Button>
                            ) : (
                                <Button
                                    play
                                    small
                                    className={cx('header__play')}
                                    onClick={() => {
                                        playlistContext.dataPlaylist.funcPlaylist(
                                            idHeader,
                                            namePlaylist,
                                            playlist
                                        );

                                        playlistContext.dataTrack.funcTrack(
                                            0,
                                            playlist[0].track?.id,
                                            playlist[0].track?.type,
                                            true
                                        );
                                    }}
                                >
                                    <PlayIcon />
                                </Button>
                            )}

                            <span className={cx('header__title')}>
                                {namePlaylist}
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
