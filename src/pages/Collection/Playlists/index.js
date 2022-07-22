import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd';

import styles from './Playlists.module.scss';
import Playlist from '../../../components/Playlist';
import spotifyApi from '../../../api/spotifyApi';
import { PlayListIcon } from '../../../components/Icon';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Playlists() {
    const [playlists, setPlaylists] = useState(null);
    const [tracksLiked, setTracksLiked] = useState(null);
    const [skeleton, setSkeleton] = useState(true);

    useEffect(() => {
        const myPlaylists = async () => {
            try {
                const resPlaylists = await spotifyApi.getMyPlaylists();
                const resTracks = await spotifyApi.getMyTracksLiked(3, 1);

                setPlaylists(resPlaylists.items);
                setTracksLiked(resTracks);
                setTimeout(() => {
                    setSkeleton(false);
                }, 200);
            } catch (err) {
                console.log(err);
                setSkeleton(true);
            }
        };

        myPlaylists();
    }, []);

    const navigate = useNavigate();

    const playPlaylist = (id) => {
        navigate(`/playlist/${id}`, { state: { id: id } });
    };

    return (
        <div className="container">
            <div className="border--bottom">
                {playlists?.length > 0 ? (
                    <div className={cx('library__container')}>
                        <h3 className={cx('library__title')}>Playlists</h3>
                        <Row gutter={[20, 20]}>
                            <Col xxl={6} xl={8} md={18} sm={24} xs={24}>
                                <Playlist
                                    playlist={tracksLiked}
                                    skeleton={skeleton}
                                    liked
                                />
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
                ) : (
                    <div className={cx('playlist__not')}>
                        <PlayListIcon className={cx('playlist__icon')} />

                        <div className={cx('playlist__span')}>
                            <h1>Create your first playlist</h1>
                            <span>It's easy, we'll help you.</span>
                        </div>

                        <Button fill>Create Playlist</Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Playlists;
