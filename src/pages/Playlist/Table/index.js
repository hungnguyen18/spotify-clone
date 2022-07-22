import React, { useState } from 'react';
import classNames from 'classnames/bind';

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

function Table() {
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
                    <tr className={cx('table__row')}>
                        <td className={cx('table__stt')}>
                            <div className={cx('stt')}>
                                <span>1</span>
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
                                    src="https://i.scdn.co/image/ab67616d000048517096491a94e068a5fe8ac9cf"
                                    alt=""
                                />
                            </div>

                            <div className={cx('title__info')}>
                                <span className={cx('title__name')}>
                                    Petula Thomas
                                </span>
                                <span className={cx('title__author')}>
                                    Govii
                                </span>
                            </div>
                        </td>
                        <td className={cx('table__album')}>Angels Below</td>
                        <td className={cx('table__date')}>9 hours ago</td>
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

                                <span className={cx('time__song')}>1:55</span>

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
                </tbody>
            </table>
        </div>
    );
}

export default Table;
