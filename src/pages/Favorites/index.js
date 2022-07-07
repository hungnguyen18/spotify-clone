import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Favorites.module.scss';
import apiClient from '../../spotify';

const cx = classNames.bind(styles);

function Favorites() {
    const [data, setData] = useState(null);

    useEffect(() => {
        apiClient.get('browse/featured-playlists').then((response) => {
            setData(response);
        });
    }, []);

    console.log(data);

    return <div className={cx('container')}>Favorites</div>;
}

export default Favorites;
