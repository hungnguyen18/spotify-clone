import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { Row } from 'antd';

import styles from './Playlists.module.scss';
import Playlist from '../../../components/Playlist';
import spotifyApi from '../../../api/spotifyApi';

const cx = classNames.bind(styles);

function Playlists() {
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
        const myPlaylists = async () => {
            try {
                const res = await spotifyApi.getMyPlaylists();

                setPlaylists(res.items);
            } catch (err) {
                console.log(err);
            }
        };

        myPlaylists();
    }, []);

    const navigate = useNavigate();

    const playPlaylist = (id) => {
        navigate('/player', { state: { id: id } });
    };

    return (
        <div className="container">
            <div className={cx('library__container')}>
                <h3 className={cx('library__title')}>Playlists</h3>
                <Row gutter={[20, 20]}>
                    {playlists?.map((playlist) => (
                        <Playlist
                            key={playlist.id}
                            playlist={playlist}
                            playPlaylist={playPlaylist}
                        />
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Playlists;
