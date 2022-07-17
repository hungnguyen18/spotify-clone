import React from 'react';
import classNames from 'classnames/bind';

import styles from './Playlist.module.scss';
import { PlayIcon } from '../Icon';

const cx = classNames.bind(styles);

function Playlist({ playlist, playPlaylist, liked }) {
    return liked ? (
        <div className={cx('playlist__liked')}>
            <div className={cx('liked__wrapper')}>
                <span className={cx('liked__song')}>
                    <span className={cx('song')}>
                        <span className={cx('author')}>TORIENA</span>
                        <span className={cx('name__song')}>
                            プロサウンドの逆襲
                        </span>
                    </span>
                    <span className={cx('song')}>
                        <span className={cx('author')}>TORIENA</span>
                        <span className={cx('name__song')}>
                            プロサウンドの逆襲
                        </span>
                    </span>
                </span>

                <div className={cx('liked__title')}>
                    <h1>Liked Songs</h1>
                    <span>2 liked songs</span>
                </div>

                <div className={cx('liked__fade')}>
                    <div className={cx('fade__btn')}>
                        <PlayIcon />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div
            className={cx('playlist__container')}
            onClick={() => playPlaylist(playlist.id)}
        >
            <div className={cx('playlist__wrapper')}>
                <div className={cx('playlist__img')}>
                    <img src={playlist.images[0].url} alt="" />

                    <div className={cx('playlist__fade')}>
                        <div className={cx('fade__btn')}>
                            <PlayIcon />
                        </div>
                    </div>
                </div>

                <div className={cx('playlist__info')}>
                    <span className={cx('playlist__title')}>
                        {playlist.name}
                    </span>

                    <span className={cx('playlist__subtitle')}>
                        By {playlist.owner.display_name}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Playlist;
