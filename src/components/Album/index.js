import React from 'react';
import classNames from 'classnames/bind';

import styles from './Album.module.scss';
import Button from '../Button';
import { PlayIcon } from '../Icon';
import { Skeleton } from 'antd';

const cx = classNames.bind(styles);

function Album({ playlist, skeleton }) {
    return (
        <div className={cx('album__container')}>
            <div className={cx('album__wrapper')}>
                <div className={cx('album__img')}>
                    <img src={playlist.images[0]?.url} alt="" />

                    <div className={cx('album__fade')}>
                        {/* {isPlaying && idPlaylist === playlist.id ? ( */}
                        {/* <Button
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
                        ) : ( */}
                        <Button
                            play
                            small
                            // onClick={(e) => {
                            //     e.stopPropagation();

                            //     playlistContext.dataPlaylist.funcPlaylist(
                            //         playlist.id,
                            //         playlist.name,
                            //         playlistItems
                            //     );

                            //     playlistContext.dataTrack.funcTrack(
                            //         0,
                            //         playlistItems[0].track?.id,
                            //         playlistItems[0].track?.type,
                            //         true
                            //     );
                            // }}
                        >
                            <PlayIcon />
                        </Button>
                        {/* )} */}
                    </div>
                </div>

                <div className={cx('album__info')}>
                    <span className={cx('album__title')}>{playlist.name}</span>

                    <span className={cx('album__subtitle')}>
                        {playlist.artists[0]?.name}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Album;
