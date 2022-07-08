import React from 'react';
import classNames from 'classnames/bind';
import { Col } from 'antd';

import styles from './Playlist.module.scss';

const cx = classNames.bind(styles);

function Playlist({ playlist, playPlaylist }) {
    return (
        <Col xl={4} md={6} sm={12} xs={12} key={playlist.id}>
            <div
                className={cx('playlist__container')}
                onClick={() => playPlaylist(playlist.id)}
            >
                <img
                    src={playlist.images[0].url}
                    alt=""
                    className={cx('playlist__img')}
                />

                <div className={cx('playlist__info')}>
                    <span className={cx('playlist__title')}>
                        {playlist.name}
                    </span>

                    <span className={cx('playlist__subtitle')}>
                        {playlist.tracks.total} Songs
                    </span>
                </div>
            </div>
        </Col>
    );
}

export default Playlist;
