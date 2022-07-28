import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
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
import moment from 'moment';
import spotifyApi from '../../api/spotifyApi';

const cx = classNames.bind(styles);

function Player() {
    const [Playing, setPlaying] = useState(false);
    const [like, setLike] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [audioVolume, setAudioVolume] = useState(0);
    const [trackPlayer, setTrackPlayer] = useState({});

    const audioRef = useRef();

    //DataPlaylists
    const playlistContext = useContext(dataContext);
    const trackType = playlistContext.dataTrack?.type;
    // const trackId = playlistContext.dataTrack?.id;
    let trackIndex = playlistContext.dataTrack?.index;
    const playlist = playlistContext.dataPlaylist?.playlist;

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
                        });
                        setPlaying(true);
                        break;
                    default:
                        const resCurrentTrack =
                            await spotifyApi.getCurrentPlaying();

                        setTrackPlayer({
                            img: resCurrentTrack.item.album.images[1]?.url,
                            name: resCurrentTrack.item.name,
                            artist: resCurrentTrack.item.artists[0].name,
                            url: resCurrentTrack.item.preview_url,
                        });
                }
            } catch (err) {
                console.log(err);
                setTrackPlayer({});
            }
        };

        getTrack();
    }, [playlistContext.dataTrack.id]);

    const handleLike = () => {
        const isLike = like === false ? true : false;
        setLike(isLike);
    };

    //Control slider audio
    const handlePlaying = () => {
        const isPlaying = Playing === false ? true : false;

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

        setPlaying(isPlaying);
    };

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);

        setAudioVolume(audioRef.current.volume * 100);

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

    //Control volume
    const handleChangeVolume = (value) => {
        audioRef.current.volume = value / 1000;

        setAudioVolume(value);
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

                    <div className={cx('icon')}>
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

                    <div className={cx('icon')}>
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
                <audio
                    ref={audioRef}
                    src={trackPlayer.url}
                    onTimeUpdate={() => {
                        setCurrentTime(audioRef.current.currentTime);
                    }}
                    onLoadedData={handleLoadedData}
                />
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
                        defaultValue={0}
                        value={audioVolume}
                        trackStyle={{
                            backgroundColor: 'var(--primary-color)',
                        }}
                        tipFormatter={null}
                        onChange={handleChangeVolume}
                    />
                </div>
            </div>
        </div>
    );
}

export default Player;
