import React, { useState, useEffect } from 'react';
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
import Table from './Table';
import spotifyApi from '../../api/spotifyApi';

const cx = classNames.bind(styles);

function Playlist() {
    const [isActiveIcon, setIsActiveIcon] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('');
    const [playlist, setPlaylist] = useState([]);
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

    const id = location.state.id;

    const likes = new Intl.NumberFormat().format(playlist.followers?.total);

    useEffect(() => {
        const getPlaylist = async () => {
            try {
                const res = await spotifyApi.getPlaylist(id);

                setPlaylist(res);
            } catch (err) {
                console.log(err);
            }
        };

        //Random color
        const random_rgba = () => {
            const o = Math.round,
                r = Math.random,
                s = 255;

            return (
                'rgba(' +
                o(r() * s) +
                ',' +
                o(r() * s) +
                ',' +
                o(r() * s) +
                ',' +
                r().toFixed(1) +
                ')'
            );
        };

        setBackgroundColor(random_rgba());

        getPlaylist();
    }, [id]);

    const handleSetActiveIcon = () => {
        const isActive = isActiveIcon === true ? false : true;
        setIsActiveIcon(isActive);
    };

    return (
        <div
            className={cx('playlist__container')}
            style={{ backgroundColor: backgroundColor }}
        >
            <div className={cx('playlist__header')}>
                <img
                    src={playlist.images?.map((img) => img.url).slice(0)}
                    alt="Img"
                    className={cx('playlist__img')}
                />

                <div className={cx('playlist__info')}>
                    <span className={cx('playlist__title')}>PLAYLIST</span>

                    <h1 className={cx('playlist__name')}>{playlist.name}</h1>

                    <span className={cx('playlist__description')}>
                        {playlist?.description}
                    </span>

                    <div className={cx('playlist__details')}>
                        <span className={cx('playlist__total')}>
                            {playlist.owner?.display_name}
                            <span>{likes} likes</span>
                            <span>{playlist.tracks?.total} songs</span>
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

                        <Table playlist={playlist.tracks?.items} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Playlist;
