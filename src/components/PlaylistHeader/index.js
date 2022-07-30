import React from 'react';
import classNames from 'classnames/bind';

import styles from './PlaylistHeader.module.scss';

const cx = classNames.bind(styles);

function PlaylistHeader({ data }) {
    const likes = new Intl.NumberFormat().format(data.followers?.total);

    const img = data.images?.map((img) => img.url).slice(0, 1);

    return (
        <div className={cx('playlist__header')}>
            <img src={img} alt="Img" className={cx('playlist__img')} />

            <div className={cx('playlist__info')}>
                <span className={cx('playlist__title')}>PLAYLIST</span>

                <h1 className={cx('playlist__name')}>{data.name}</h1>

                <span className={cx('playlist__description')}>
                    {data?.description}
                </span>

                <div className={cx('playlist__details')}>
                    <span className={cx('playlist__total')}>
                        {data.owner?.display_name}
                        <span>{likes} likes</span>
                        <span>{data.tracks?.total} songs</span>
                    </span>

                    <span className={cx('playlist__time')}>, about 6 hr</span>
                </div>
            </div>
        </div>
    );
}

export default PlaylistHeader;
