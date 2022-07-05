import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Library.module.scss';
import apiClient from '../../spotify';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd';

const cx = classNames.bind(styles);

function Library() {
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
        apiClient.get('me/playlists').then((response) => {
            setPlaylists(response.data.items);
        });
    }, []);

    const navigate = useNavigate();

    const playPlaylist = (id) => {
        navigate('/player', { state: { id: id } });
    };

    return (
        <div className={cx('library__container')}>
            <h2 className={cx('library__title')}>Playlists</h2>
            <Row>
                {playlists?.map((playlist) => (
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
                ))}
            </Row>
        </div>
    );
}

export default Library;
