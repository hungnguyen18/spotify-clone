import React, { useContext, useRef, useState } from 'react';
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

const cx = classNames.bind(styles);

function Player() {
    const [Playing, setPlaying] = useState(false);
    const [like, setLike] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [audioVolume, setAudioVolume] = useState(0);

    const audioRef = useRef();

    const idContext = useContext(dataContext);

    const handleLike = () => {
        const isLike = like === false ? true : false;
        setLike(isLike);
    };

    // console.log(idContext);

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
                    <img
                        src="https://i.scdn.co/image/ab67616d00001e0223ec0bc09b61d08fcb64acea"
                        alt="img"
                    />
                </div>

                <div className={cx('player__info')}>
                    <span className={cx('player__track')}>
                        <Link to="/">Bên trên tầng lầu</Link>
                    </span>
                    <span className={cx('player__author')}>
                        <Link to="/">Tăng Duy Tân</Link>
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
                    src="https://p.scdn.co/mp3-preview/24d3cd9175b4f220339cb4e39be127de7e43ac4f?cid=eda06710579b49d0a0d768764ec37158"
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
