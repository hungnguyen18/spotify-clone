import React from 'react';
import classNames from 'classnames/bind';

import styles from './Playlist.module.scss';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Playlist() {
    const location = useLocation();

    console.log(location);

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
                            <span>123,905 likes</span>
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
                        <h1>Body</h1>
                        <h1>Body</h1>
                        <h1>Body</h1>
                        <h1>Body</h1>
                        <h1>Body</h1>
                        <h1>Body</h1>
                        <h1>Body</h1>
                        <h1>Body</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Playlist;
