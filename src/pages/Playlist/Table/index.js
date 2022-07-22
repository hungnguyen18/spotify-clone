import React, { useState } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';

import styles from './Table.module.scss';
import {
    ClockIcon,
    HeartActiveIcon,
    HeartIcon,
    MoreMenuIcon,
    PlayIcon,
    SmallRightArrowIcon,
} from '../../../components/Icon';
import Popper from '../../../components/Popper';

const cx = classNames.bind(styles);

function Table({ playlist }) {
    const [isActiveIcon, setIsActiveIcon] = useState(false);

    const handleSetActiveIcon = () => {
        const isActive = isActiveIcon === true ? false : true;
        setIsActiveIcon(isActive);
    };

    const dataMenuPopper = [
        {
            id: 1,
            name: 'Add to queue',
            icon: null,
            onClick: () => {},
            styles: {
                borderBottom: '1px solid #333333',
            },
        },
        {
            id: 2,
            name: 'Go to playlist radio',
            icon: null,
            onClick: () => {},
            styles: null,
        },
        {
            id: 3,
            name: 'Go to artist',
            icon: null,
            onClick: () => {},
            styles: null,
        },
        {
            id: 4,
            name: 'Go to album',
            icon: null,
            onClick: () => {},
            styles: null,
        },
        {
            id: 5,
            name: 'Show credits',
            icon: null,
            onClick: () => {},
            styles: {
                borderBottom: '1px solid #333333',
            },
        },
        {
            id: 6,
            name: 'Save to your Liked Songs',
            icon: null,
            onClick: () => {},
            styles: null,
        },
        {
            id: 7,
            name: 'Add to playlist',
            icon: <SmallRightArrowIcon className={cx('icon-arrow-right')} />,
            onClick: () => {},
            styles: {
                borderBottom: '1px solid #333333',
            },
        },
        {
            id: 8,
            name: 'Share',
            icon: <SmallRightArrowIcon className={cx('icon-arrow-right')} />,
            onClick: () => {},
            styles: {
                borderBottom: '1px solid #333333',
            },
        },
        {
            id: 9,
            name: 'Open in Desktop app',
            icon: null,
            onClick: () => {},
            styles: null,
        },
    ];

    return (
        <div className={cx('table')}>
            <table>
                <thead>
                    <tr className={cx('table__thead')}>
                        <th className={cx('table__stt')}>#</th>
                        <th className={cx('table__title')}>TITLE</th>
                        <th className={cx('table__album')}>ALBUM</th>
                        <th className={cx('table__date')}>DATE ADDED</th>
                        <th className={cx('table__time')}>
                            <ClockIcon />
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {playlist?.map((item, i) => (
                        <tr className={cx('table__row')} key={item.track.id}>
                            <td className={cx('table__stt')}>
                                <div className={cx('stt')}>
                                    <span>{i + 1}</span>
                                    <PlayIcon
                                        width="1.6rem"
                                        height="1.6rem"
                                        className={cx('icon')}
                                    />
                                </div>
                            </td>
                            <td className={cx('table__title')}>
                                <div className={cx('title__img')}>
                                    <img
                                        src={item.track.album.images
                                            ?.map((img) => img.url)
                                            .slice(1, 2)}
                                        alt=""
                                    />
                                </div>

                                <div className={cx('title__info')}>
                                    <span className={cx('title__name')}>
                                        {item.track?.name}
                                    </span>
                                    <span className={cx('title__author')}>
                                        {item.track.artists
                                            ?.map((item) => item.name)
                                            .slice(0, 1)}
                                    </span>
                                </div>
                            </td>
                            <td className={cx('table__album')}>
                                {item.track.album?.name}
                            </td>
                            <td className={cx('table__date')}>
                                {moment(item.added_at).fromNow()}
                            </td>
                            <td className={cx('table__time')}>
                                <div className={cx('time')}>
                                    <div
                                        className={cx('time__icon')}
                                        onClick={handleSetActiveIcon}
                                    >
                                        {isActiveIcon ? (
                                            <HeartActiveIcon
                                                width="1.6rem"
                                                height="1.6rem"
                                                className={cx('icon-active')}
                                            />
                                        ) : (
                                            <HeartIcon
                                                width="1.6rem"
                                                height="1.6rem"
                                                className={cx('icon')}
                                            />
                                        )}
                                    </div>

                                    <span className={cx('time__song')}>
                                        {moment(
                                            item.track?.duration_ms
                                        ).minute()}
                                        :
                                        {moment(
                                            item.track?.duration_ms
                                        ).second()}
                                    </span>

                                    <div style={{ textAlign: 'left' }}>
                                        <Popper
                                            data={dataMenuPopper}
                                            width={'210px'}
                                            offset={[200, 0]}
                                            placement={'left'}
                                        >
                                            <div>
                                                <MoreMenuIcon
                                                    width="1.6rem"
                                                    height="1.6rem"
                                                    className={cx('icon')}
                                                />
                                            </div>
                                        </Popper>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
