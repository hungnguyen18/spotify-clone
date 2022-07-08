import React from 'react';
import classNames from 'classnames/bind';

import styles from './Playlist.module.scss';

const cx = classNames.bind(styles);

function Playlist() {
    return <div className={cx('container')}>Playlist</div>;
}

export default Playlist;
