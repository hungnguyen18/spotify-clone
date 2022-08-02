import React from 'react';
import classNames from 'classnames/bind';

import styles from './Artist.module.scss';
import Button from '../Button';
import { PlayIcon } from '../Icon';
import { Skeleton } from 'antd';

const cx = classNames.bind(styles);

function Artist({ artist, skeleton }) {
    return (
        <div className={cx('artist__container')}>
            <div className={cx('artist__wrapper')}>
                <div className={cx('artist__img')}>
                    <img src={artist.images[0]?.url} alt="" />

                    <div className={cx('artist__fade')}>
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

                <div className={cx('artist__info')}>
                    <span className={cx('artist__title')}>{artist?.name}</span>

                    <span className={cx('artist__subtitle')}>
                        {artist?.type}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Artist;
