import React from 'react';
import classNames from 'classnames/bind';

import styles from './Library.module.scss';

const cx = classNames.bind(styles);

function Library() {
    return <div className={cx('container')}>Library</div>;
}

export default Library;
