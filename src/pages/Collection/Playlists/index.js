import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useNavigate, useLocation } from 'react-router-dom';
import { Col, Row } from 'antd';

import styles from './Playlists.module.scss';
import Playlist from '../../../components/Playlist';
import spotifyApi from '../../../api/spotifyApi';
import MenuLibrary from '../../../components/MenuLibrary';

const cx = classNames.bind(styles);

function Playlists() {
    const [playlists, setPlaylists] = useState(null);
    const [tracksLiked, setTracksLiked] = useState(null);

    useEffect(() => {
        const myPlaylists = async () => {
            try {
                const resPlaylists = await spotifyApi.getMyPlaylists();
                const resTracks = await spotifyApi.getMyTracksLiked(3, 1);

                setPlaylists(resPlaylists.items);
                setTracksLiked(resTracks);
            } catch (err) {
                console.log(err);
            }
        };

        myPlaylists();
    }, []);

    console.log(tracksLiked);

    const navigate = useNavigate();

    const playPlaylist = (id) => {
        // navigate('/player', { state: { id: id } });
    };

    return (
        <div className="container">
            <div className={cx('library__container')}>
                <h3 className={cx('library__title')}>Playlists</h3>
                <Row gutter={[20, 20]}>
                    <Col xxl={6} xl={8} md={12} sm={24} xs={24}>
                        <Playlist playlist={tracksLiked} liked />
                    </Col>

                    {playlists?.map((playlist) => (
                        <Col
                            xxl={3}
                            xl={4}
                            md={6}
                            sm={12}
                            xs={12}
                            key={playlist.id}
                        >
                            <Playlist
                                playlist={playlist}
                                playPlaylist={playPlaylist}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Playlists;
