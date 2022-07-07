import React from 'react';
import classNames from 'classnames/bind';

import styles from './Player.module.scss';

const cx = classNames.bind(styles);

function Player({ token }) {
    return <div className={cx('player__container')}>Player</div>;
}

export default Player;
