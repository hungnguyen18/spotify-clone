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
                <div className={cx('playlist__wrapper')}>
                    <div className={cx('playlist__img')}>
                        <img src={playlist.images[0].url} alt="" />
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
        </Col>
    );
}

export default Playlist;
