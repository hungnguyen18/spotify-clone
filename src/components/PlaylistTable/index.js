import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';

import styles from './Table.module.scss';
import {
    ClockIcon,
    HeartActiveIcon,
    HeartIcon,
    MoreMenuIcon,
    PauseIcon,
    PlayIcon,
    SmallRightArrowIcon,
} from '../Icon';
import Popper from '../Popper';
import { dataContext } from '../../utils/DataProvider';

const cx = classNames.bind(styles);

function PlaylistTable({ playlist, res, search = false }) {
    const [isActiveRow, setIsActiveRow] = useState();

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

    const idContext = useContext(dataContext);
    const isPlaying = idContext.dataTrack.isPlaying;
    const idTrack = idContext.dataTrack.id;

    const handleSetId = (id) => {
        setIsActiveRow(id);
    };

    return search ? (
        <div className={cx('table-search')}>
            <table>
                <tbody>
                    {playlist?.map((item, i) => (
                        <tr
                            className={cx(
                                'table-search__row',
                                `${item.id === isActiveRow ? 'active' : ''}`
                            )}
                            key={item.id}
                            onClick={() => handleSetId(item.id)}
                        >
                            <td className={cx('table-search__title')}>
                                <div className={cx('title__img')}>
                                    <img
                                        src={item.album.images
                                            ?.map((img) => img.url)
                                            .slice(1, 2)}
                                        alt=""
                                    />

                                    {isPlaying && idTrack === item.id ? (
                                        <div
                                            style={{ display: 'flex' }}
                                            onClick={() => {
                                                idContext.dataPlaylist.funcPlaylist(
                                                    '',
                                                    '',
                                                    playlist
                                                );

                                                idContext.dataTrack.funcTrack(
                                                    i,
                                                    item.id,
                                                    'song',
                                                    false
                                                );
                                            }}
                                        >
                                            <PauseIcon
                                                width="1.6rem"
                                                height="1.6rem"
                                                className={cx('icon-play')}
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            style={{ display: 'flex' }}
                                            onClick={() => {
                                                idContext.dataPlaylist.funcPlaylist(
                                                    '',
                                                    '',
                                                    playlist
                                                );

                                                idContext.dataTrack.funcTrack(
                                                    i,
                                                    item.id,
                                                    'song',
                                                    true
                                                );
                                            }}
                                        >
                                            <PlayIcon
                                                width="1.6rem"
                                                height="1.6rem"
                                                className={cx('icon-play')}
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className={cx('title__info')}>
                                    <span
                                        className={cx(
                                            'title__name',
                                            `${
                                                isPlaying === true &&
                                                idTrack === item.id
                                                    ? 'active'
                                                    : ''
                                            }`
                                        )}
                                    >
                                        {item?.name}
                                    </span>
                                    <span className={cx('title__author')}>
                                        {item.artists
                                            ?.map((item) => item.name)
                                            .slice(0, 1)}
                                    </span>
                                </div>
                            </td>
                            <td className={cx('table-search__time')}>
                                <div className={cx('time')}>
                                    <div className={cx('time__icon')}>
                                        <HeartIcon
                                            width="1.6rem"
                                            height="1.6rem"
                                            className={cx('icon')}
                                        />
                                    </div>

                                    <span className={cx('time__song')}>
                                        {moment
                                            .utc(
                                                moment
                                                    .duration(
                                                        item?.duration_ms,
                                                        'millisecond'
                                                    )
                                                    .asMilliseconds()
                                            )
                                            .format('mm:ss')}
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
    ) : (
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
                        <tr
                            className={cx(
                                'table__row',
                                `${
                                    item.track.id === isActiveRow
                                        ? 'active'
                                        : ''
                                }`
                            )}
                            key={item.track.id}
                            onClick={() => handleSetId(item.track.id)}
                        >
                            <td className={cx('table__stt')}>
                                <div className={cx('stt')}>
                                    <span>{i + 1}</span>

                                    {isPlaying && idTrack === item.track.id ? (
                                        <div
                                            style={{ display: 'flex' }}
                                            onClick={(e) => {
                                                e.preventDefault();

                                                idContext.dataPlaylist.funcPlaylist(
                                                    res?.id,
                                                    res?.name,
                                                    res.tracks?.items
                                                );

                                                idContext.dataTrack.funcTrack(
                                                    i,
                                                    item.track.id,
                                                    item.track.type,
                                                    false
                                                );
                                            }}
                                        >
                                            <PauseIcon
                                                width="1.6rem"
                                                height="1.6rem"
                                                className={cx('icon')}
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            style={{ display: 'flex' }}
                                            onClick={(e) => {
                                                e.preventDefault();

                                                idContext.dataPlaylist.funcPlaylist(
                                                    res?.id,
                                                    res?.name,
                                                    res.tracks?.items
                                                );

                                                idContext.dataTrack.funcTrack(
                                                    i,
                                                    item.track.id,
                                                    item.track.type,
                                                    true
                                                );
                                            }}
                                        >
                                            <PlayIcon
                                                width="1.6rem"
                                                height="1.6rem"
                                                className={cx('icon')}
                                            />
                                        </div>
                                    )}
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
                                    <span
                                        className={cx(
                                            'title__name',
                                            `${
                                                isPlaying === true &&
                                                idTrack === item.track.id
                                                    ? 'active'
                                                    : ''
                                            }`
                                        )}
                                    >
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
                                <div className={cx('album__name')}>
                                    {item.track.album?.name}
                                </div>
                            </td>
                            <td className={cx('table__date')}>
                                {moment(item.added_at).fromNow()}
                            </td>
                            <td className={cx('table__time')}>
                                <div className={cx('time')}>
                                    <div className={cx('time__icon')}>
                                        <HeartIcon
                                            width="1.6rem"
                                            height="1.6rem"
                                            className={cx('icon')}
                                        />
                                    </div>

                                    <span className={cx('time__song')}>
                                        {moment
                                            .utc(
                                                moment
                                                    .duration(
                                                        item.track?.duration_ms,
                                                        'millisecond'
                                                    )
                                                    .asMilliseconds()
                                            )
                                            .format('mm:ss')}
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

export default PlaylistTable;
