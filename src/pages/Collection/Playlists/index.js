import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { Row } from 'antd';

import styles from './Playlists.module.scss';
import apiClient from '../../../spotify';
import Playlist from '../../../components/Playlist';

const cx = classNames.bind(styles);

function Playlists() {
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
            <h2 className={cx('library__title')}>My playlist</h2>
            <Row>
                {playlists?.map((playlist) => (
                    <Playlist
                        key={playlist.id}
                        playlist={playlist}
                        playPlaylist={playPlaylist}
                    />
                ))}
            </Row>
        </div>
    );
}

export default Playlists;
