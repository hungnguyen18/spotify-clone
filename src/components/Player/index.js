import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import classNames from 'classnames/bind';

import styles from './Player.module.scss';

const cx = classNames.bind(styles);

function Player() {
    return (
        <div className={cx('player__container')}>
            <AudioPlayer
                layout="horizontal"
                showSkipControls={true}
                showJumpControls={false}
            />
        </div>
    );
}

export default Player;
