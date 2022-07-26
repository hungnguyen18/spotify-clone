import React, { useContext, useState } from 'react';
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

const cx = classNames.bind(styles);

function Player() {
    const [Playing, setPlaying] = useState(false);
    const [like, setLike] = useState(false);

    const idContext = useContext(dataContext);

    console.log(idContext);

    const handlePlaying = () => {
        const isPlaying = Playing === false ? true : false;
        setPlaying(isPlaying);
    };

    const handleLike = () => {
        const isLike = like === false ? true : false;
        setLike(isLike);
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
                            <PlayIcon width="1.6rem" height="1.6rem" />
                        </div>
                    ) : (
                        <div
                            className={cx('play__icon')}
                            onClick={handlePlaying}
                        >
                            <PauseIcon />
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
                    <span className={cx('slider__current')}>00:00</span>

                    <div className={cx('slider__timeline')}>
                        <Slider
                            defaultValue={0}
                            trackStyle={{
                                backgroundColor: 'var(--primary-color)',
                            }}
                            tipFormatter={null}
                        />
                    </div>

                    <span className={cx('slider__duration')}>00:00</span>
                </div>
                <audio src="https://p.scdn.co/mp3-preview/24d3cd9175b4f220339cb4e39be127de7e43ac4f?cid=eda06710579b49d0a0d768764ec37158" />
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
                        trackStyle={{
                            backgroundColor: 'var(--primary-color)',
                        }}
                        tipFormatter={null}
                    />
                </div>
            </div>
        </div>
    );
}

export default Player;
