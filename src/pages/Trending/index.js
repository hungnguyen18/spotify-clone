import React from 'react';
import classNames from 'classnames/bind';

import styles from './Trending.module.scss';

const cx = classNames.bind(styles);

function Trending() {
    return <div className={cx('container')}>Trending</div>;
}

export default Trending;
