import React from 'react';
import classNames from 'classnames/bind';

import styles from './Favorites.module.scss';

const cx = classNames.bind(styles);

function Favorites() {
    return <div className={cx('container')}>Favorites</div>;
}

export default Favorites;
