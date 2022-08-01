import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Skeleton } from 'antd';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

import styles from './Playlist.module.scss';
import { PauseLargeIcon, PlayIcon } from '../Icon';
import Button from '../Button';
import { dataContext } from '../../utils/DataProvider';
import spotifyApi from '../../api/spotifyApi';

const cx = classNames.bind(styles);

function Playlist({ playlist, skeleton, liked }) {
    const [playlistItems, setPlaylistItems] = useState({});

    //Data context
    const playlistContext = useContext(dataContext);
    const isPlaying = playlistContext.dataTrack.isPlaying;
    const idPlaylist = playlistContext.dataPlaylist.id;

    const navigate = useNavigate();

    const playPlaylist = (id) => {
        navigate(`/playlist/${id}`, { state: { id: id } });
    };

    useEffect(() => {
        const getPlaylistItems = async () => {
            try {
                const res = await spotifyApi.getPlaylistItems(playlist.id);

                setPlaylistItems(res.items);
            } catch (err) {
                console.log(err);
            }
        };

        getPlaylistItems();
    }, []);

    return liked ? (
        <div className={cx('playlist__liked')}>
            <div className={cx('liked__wrapper')}>
                <span className={cx('liked__song')}>
                    {playlist?.items.map((item) => (
                        <Skeleton active loading={skeleton} key={item.track.id}>
                            <span className={cx('song')}>
                                <span className={cx('author')}>
                                    {item.track.artists[0].name}
                                </span>
                                <span className={cx('name__song')}>
                                    {item.track.name}
                                </span>
                            </span>
                        </Skeleton>
                    ))}
                </span>

                <div className={cx('liked__title')}>
                    <h1>Liked Songs</h1>
                    <span>{playlist?.total} liked songs</span>
                </div>

                <div className={cx('liked__fade')}>
                    <Button play small>
                        <PlayIcon />
                    </Button>
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
                        {isPlaying && idPlaylist === playlist.id ? (
                            <Button
                                play
                                small
                                onClick={(e) => {
                                    e.stopPropagation();

                                    playlistContext.dataPlaylist.funcPlaylist(
                                        playlist.id,
                                        playlist.name,
                                        playlistItems
                                    );

                                    playlistContext.dataTrack.funcTrack(
                                        0,
                                        playlistItems[0].track?.id,
                                        playlistItems[0].track?.type,
                                        false
                                    );
                                }}
                            >
                                <PauseLargeIcon
                                    width="2.4rem"
                                    height="2.4rem"
                                />
                            </Button>
                        ) : (
                            <Button
                                play
                                small
                                onClick={(e) => {
                                    e.stopPropagation();

                                    playlistContext.dataPlaylist.funcPlaylist(
                                        playlist.id,
                                        playlist.name,
                                        playlistItems
                                    );

                                    playlistContext.dataTrack.funcTrack(
                                        0,
                                        playlistItems[0].track?.id,
                                        playlistItems[0].track?.type,
                                        true
                                    );
                                }}
                            >
                                <PlayIcon />
                            </Button>
                        )}
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

export default memo(Playlist);
