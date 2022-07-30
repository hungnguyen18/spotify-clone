import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Slider } from 'antd';

import styles from './Player.module.scss';
import { dataContext } from '../../utils/DataProvider';
import {
    ControlIcon,
    HeartActiveIcon,
    HeartIcon,
    LyricsIcon,
    NextIcon,
    PauseIcon,
    PipToggleIcon,
    PlayIcon,
    PrevIcon,
    QueueIcon,
    RepeatIcon,
    ShuffleIcon,
    VolumeIcon,
} from '../../components/Icon';
import spotifyApi from '../../api/spotifyApi';

const cx = classNames.bind(styles);

function Player() {
    const [Playing, setPlaying] = useState(false);
    const [like, setLike] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [trackPlayer, setTrackPlayer] = useState({});

    const audioRef = useRef();

    //DataPlaylists
    const playlistContext = useContext(dataContext);

    let trackIndex = playlistContext.dataTrack?.index;

    const trackId = playlistContext.dataTrack?.id;
    const trackType = playlistContext.dataTrack?.type;
    const trackIsPlaying = playlistContext.dataTrack.isPlaying;
    const playlist = playlistContext.dataPlaylist?.playlist;

    const idPlaylistLocalStorage = window.localStorage.getItem('idPlaylist');
    const indexTrackLocalStorage = Number(
        window.localStorage.getItem('indexTrack')
    );

    useEffect(() => {
        const getTrack = async () => {
            try {
                switch (trackType) {
                    case 'track':
                    case 'episode':
                        setTrackPlayer({
                            img: playlist[trackIndex].track.album.images[1]
                                ?.url,
                            name: playlist[trackIndex].track.name,
                            artist: playlist[trackIndex].track.artists[0].name,
                            url: playlist[trackIndex].track.preview_url,
                            data: playlist[trackIndex].track,
                            isDefault: false,
                        });

                        window.localStorage.setItem(
                            'idPlaylist',
                            playlistContext.dataPlaylist?.id
                        );
                        window.localStorage.setItem('indexTrack', trackIndex);

                        if (trackIsPlaying) {
                            setPlaying(true);
                            audioRef.current.play();
                        } else {
                            setPlaying(false);
                            audioRef.current.pause();
                        }

                        break;
                    default:
                        let PlaylistDefault = { id: null, index: null };

                        if (indexTrackLocalStorage === null) {
                            PlaylistDefault.id = '37i9dQZF1DWVOaOWiVD1Lf';
                            PlaylistDefault.index = 0;
                        } else {
                            PlaylistDefault.id = idPlaylistLocalStorage;
                            PlaylistDefault.index = indexTrackLocalStorage;
                        }

                        const resCurrentTrack = await spotifyApi.getPlaylist(
                            PlaylistDefault.id
                        );

                        playlistContext.dataPlaylist.funcPlaylist(
                            resCurrentTrack
                        );

                        const currentTrack =
                            resCurrentTrack.tracks.items[PlaylistDefault.index]
                                ?.track;

                        setTrackPlayer({
                            img: currentTrack.album.images[1].url,
                            name: currentTrack.name,
                            artist: currentTrack.artists[0].name,
                            url: currentTrack.preview_url,
                            isDefault: true,
                        });
                }
            } catch (err) {
                console.log(err);
                setTrackPlayer({});
            }
        };

        getTrack();
    }, [trackId, trackIsPlaying]);

    const handleLike = () => {
        const isLike = like === false ? true : false;
        setLike(isLike);
    };

    //Control slider audio
    const handlePlaying = () => {
        const isPlaying = Playing === false ? true : false;

        if (trackPlayer.isDefault) {
            if (isPlaying) {
                audioRef.current.play();

                playlistContext.dataTrack.funcTrack(
                    indexTrackLocalStorage,
                    playlist[indexTrackLocalStorage].track?.id,
                    playlist[indexTrackLocalStorage].track?.type,
                    true
                );
            } else {
                audioRef.current.pause();
            }
        } else {
            if (isPlaying) {
                audioRef.current.play();

                playlistContext.dataTrack.funcTrack(
                    trackIndex,
                    playlist[trackIndex].track?.id,
                    playlist[trackIndex].track?.type,
                    true
                );
            } else {
                audioRef.current.pause();

                playlistContext.dataTrack.funcTrack(
                    trackIndex,
                    playlist[trackIndex].track?.id,
                    playlist[trackIndex].track?.type,
                    false
                );
            }
        }

        setPlaying(isPlaying);
    };

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);

        if (Playing) audioRef.current.play();
    };

    const handleTimeSliderChange = (value) => {
        audioRef.current.currentTime = value;

        setCurrentTime(value);

        if (!Playing) {
            setPlaying(true);
            audioRef.current.play();
        }
    };

    const handleNextTrack = () => {
        const isIndex = trackPlayer.isDefault
            ? indexTrackLocalStorage
            : trackIndex;

        const nextIndex = isIndex < playlist.length - 1 ? isIndex + 1 : 0;

        playlistContext.dataTrack.funcTrack(
            nextIndex,
            playlist[nextIndex].track?.id,
            playlist[nextIndex].track?.type,
            true
        );
    };

    const handlePrevTrack = () => {
        const isIndex = trackPlayer.isDefault
            ? indexTrackLocalStorage
            : trackIndex;

        const prevIndex = isIndex > 0 ? isIndex - 1 : playlist.length - 1;

        playlistContext.dataTrack.funcTrack(
            prevIndex,
            playlist[prevIndex].track?.id,
            playlist[prevIndex].track?.type,
            true
        );

        console.log(prevIndex);
    };

    const handleEnded = () => {
        const isIndex = trackPlayer.isDefault
            ? indexTrackLocalStorage
            : trackIndex;

        const nextIndex = isIndex < playlist.length - 1 ? isIndex + 1 : 0;

        playlistContext.dataTrack.funcTrack(
            nextIndex,
            playlist[nextIndex].track?.id,
            playlist[nextIndex].track?.type,
            true
        );
    };

    return (
        <div className={cx('player__container')}>
            <div className={cx('player__details')}>
                <div className={cx('player__img')}>
                    <img src={trackPlayer.img} alt="img" />
                </div>

                <div className={cx('player__info')}>
                    <span className={cx('player__track')}>
                        <Link to="/">{trackPlayer.name}</Link>
                    </span>
                    <span className={cx('player__author')}>
                        <Link to="/">{trackPlayer.artist}</Link>
                    </span>
                </div>

                {like ? (
                    <div
                        className={cx('icon', 'heart__icon-active')}
                        onClick={handleLike}
                    >
                        <HeartActiveIcon width="1.6rem" height="1.6rem" />
                    </div>
                ) : (
                    <div
                        className={cx('icon', 'heart__icon')}
                        onClick={handleLike}
                    >
                        <HeartIcon width="1.6rem" height="1.6rem" />
                    </div>
                )}

                <div className={cx('icon')}>
                    <PipToggleIcon />
                </div>
            </div>

            <div className={cx('player__main')}>
                <div className={cx('player__btn')}>
                    <div className={cx('icon')}>
                        <ShuffleIcon />
                    </div>

                    <div className={cx('icon')} onClick={handlePrevTrack}>
                        <PrevIcon />
                    </div>

                    {Playing ? (
                        <div
                            className={cx('play__icon')}
                            onClick={handlePlaying}
                        >
                            <PauseIcon />
                        </div>
                    ) : (
                        <div
                            className={cx('play__icon')}
                            onClick={handlePlaying}
                        >
                            <PlayIcon width="1.6rem" height="1.6rem" />
                        </div>
                    )}

                    <div className={cx('icon')} onClick={handleNextTrack}>
                        <NextIcon />
                    </div>

                    <div className={cx('icon')}>
                        <RepeatIcon />
                    </div>
                </div>

                <div className={cx('player__slider')}>
                    <span className={cx('slider__current')}>
                        {moment
                            .utc(
                                moment
                                    .duration(currentTime, 'second')
                                    .asMilliseconds()
                            )
                            .format('mm:ss')}
                    </span>

                    <div className={cx('slider__timeline')}>
                        <Slider
                            value={currentTime}
                            trackStyle={{
                                backgroundColor: 'var(--primary-color)',
                            }}
                            tipFormatter={null}
                            max={duration || 0}
                            onChange={handleTimeSliderChange}
                        />
                    </div>

                    <span className={cx('slider__duration')}>
                        {moment
                            .utc(
                                moment
                                    .duration(duration, 'second')
                                    .asMilliseconds()
                            )
                            .format('mm:ss')}
                    </span>
                </div>
            </div>

            <div className={cx('player__action')}>
                <div className={cx('icon')}>
                    <LyricsIcon />
                </div>

                <div className={cx('icon')}>
                    <QueueIcon />
                </div>

                <div className={cx('icon')}>
                    <ControlIcon />
                </div>

                <div className={cx('icon')}>
                    <VolumeIcon />
                </div>

                <div className={cx('volume__slider')}>
                    <Slider
                        defaultValue={1}
                        min={0}
                        max={1}
                        step={0.01}
                        trackStyle={{
                            backgroundColor: 'var(--primary-color)',
                        }}
                        tipFormatter={null}
                        onChange={(value) => (audioRef.current.volume = value)}
                    />
                </div>
            </div>
            <audio
                ref={audioRef}
                src={trackPlayer.url}
                onTimeUpdate={() => {
                    setCurrentTime(audioRef.current.currentTime);
                }}
                onLoadedData={handleLoadedData}
                onEnded={handleEnded}
            />
        </div>
    );
}

export default Player;
