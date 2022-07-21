import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Playlist.module.scss';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import {
    HeartActiveIcon,
    HeartIcon,
    MoreMenuIcon,
    PlayLargeIcon,
    SmallRightArrowIcon,
} from '../../components/Icon';
import Popper from '../../components/Popper';

const cx = classNames.bind(styles);

function Playlist() {
    const [isActiveIcon, setIsActiveIcon] = useState(false);
    const location = useLocation();

    const dataMenuPopper = [
        {
            id: 1,
            name: 'Add to queue',
            icon: null,
            onClick: () => {},
            styles: null,
        },
        {
            id: 2,
            name: 'Go to playlist radio',
            icon: null,
            onClick: () => {},
            styles: {
                borderBottom: '1px solid #333333',
            },
        },
        {
            id: 3,
            name: 'Add to profile',
            icon: null,
            onClick: () => {},
            styles: {
                borderBottom: '1px solid #333333',
            },
        },
        {
            id: 4,
            name: 'Remove from Your Library',
            icon: null,
            onClick: () => {},
            styles: {
                borderBottom: '1px solid #333333',
            },
        },
        {
            id: 5,
            name: 'Share',
            icon: <SmallRightArrowIcon className={cx('icon-arrow-right')} />,
            onClick: () => {},
            styles: {
                borderBottom: '1px solid #333333',
            },
        },
        {
            id: 6,
            name: 'About recommendations',
            icon: null,
            onClick: () => {},
            styles: {
                borderBottom: '1px solid #333333',
            },
        },
        {
            id: 7,
            name: 'Open in Desktop app',
            icon: null,
            onClick: () => {},
            styles: null,
        },
    ];

    const handleSetActiveIcon = () => {
        const isActive = isActiveIcon === true ? false : true;
        setIsActiveIcon(isActive);
    };

    return (
        <div className={cx('playlist__container')}>
            <div className={cx('playlist__header')}>
                <img
                    src="https://i.scdn.co/image/ab67616d0000b273878ef5f909632a846601b51c"
                    alt="Img"
                    className={cx('playlist__img')}
                />

                <div className={cx('playlist__info')}>
                    <span className={cx('playlist__title')}>PLAYLIST</span>

                    <h1 className={cx('playlist__name')}>Turn The Lights On</h1>

                    <span className={cx('playlist__description')}>
                        beats + birds
                    </span>

                    <div className={cx('playlist__details')}>
                        <span className={cx('playlist__total')}>
                            Spotify <span>123,905 likes</span>
                            <span>166 songs</span>
                        </span>

                        <span className={cx('playlist__time')}>
                            , about 6 hr
                        </span>
                    </div>
                </div>
            </div>

            <div className={cx('playlist__body')}>
                <div className="container--not-padding-top">
                    <div className="border--bottom">
                        <div className={cx('playlist__actions')}>
                            <Button play large>
                                <PlayLargeIcon />
                            </Button>

                            <div
                                className={cx('playlist__heart-icon')}
                                onClick={handleSetActiveIcon}
                            >
                                {isActiveIcon ? (
                                    <HeartActiveIcon
                                        className={cx('heart-active')}
                                    />
                                ) : (
                                    <HeartIcon className={cx('heart')} />
                                )}
                            </div>

                            <Popper
                                data={dataMenuPopper}
                                offset={[90, 0]}
                                width={'210px'}
                            >
                                <div className={cx('playlist__more')}>
                                    <MoreMenuIcon />
                                </div>
                            </Popper>
                        </div>

                        <div className={cx('playlist__table')}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>TITLE</th>
                                        <th>ALBUM</th>
                                        <th>DATE ADDED</th>
                                        <th>O</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Em của ngày hôm qua</td>
                                        <td>Em của ngày hôm qua</td>
                                        <td>5 days ago</td>
                                        <td>1:55</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Playlist;
