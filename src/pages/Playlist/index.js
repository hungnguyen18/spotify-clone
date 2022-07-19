import React from 'react';
import classNames from 'classnames/bind';

import styles from './Playlist.module.scss';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Playlist() {
    const location = useLocation();

    console.log(location);

    return (
        <div className="container-full">
            <div className={cx('playlist__header')}>Header</div>

            <div className="container--not-padding-top">
                <div className="border--bottom">
                    <div className={cx('playlist__body')}>Body</div>
                </div>
            </div>
        </div>
    );
}

export default Playlist;
