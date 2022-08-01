import React from 'react';
import classNames from 'classnames/bind';

import styles from './Podcast.module.scss';
import Button from '../Button';
import { PlayIcon } from '../Icon';
import { Skeleton } from 'antd';

const cx = classNames.bind(styles);

function Podcast({ podcast, skeleton, liked }) {
    return liked ? (
        <div className={cx('podcasts__liked')}>
            <div className={cx('liked__wrapper')}>
                <span className={cx('liked__song')}>
                    {podcast?.items.map((item) => (
                        <Skeleton
                            active
                            loading={skeleton}
                            key={item.episode?.id}
                        >
                            <span className={cx('song')}>
                                <span className={cx('author')}>
                                    {item.episode?.name}
                                </span>
                                <span className={cx('name__song')}>
                                    {item.episode.show?.publisher}
                                </span>
                            </span>
                        </Skeleton>
                    ))}
                </span>

                <div className={cx('liked__title')}>
                    <h1>Your Episodes</h1>
                    <span>{podcast?.total} episodes</span>
                </div>

                <div className={cx('liked__fade')}>
                    <Button play small>
                        <PlayIcon />
                    </Button>
                </div>
            </div>
        </div>
    ) : (
        <div className={cx('podcast__container')}>
            <div className={cx('podcast__wrapper')}>
                <div className={cx('podcast__img')}>
                    <img src={podcast.show.images[0].url} alt="" />
                </div>

                <div className={cx('podcast__info')}>
                    <span className={cx('podcast__title')}>
                        {podcast.show.name}
                    </span>

                    <span className={cx('podcast__subtitle')}>
                        {podcast.show.publisher}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Podcast;
