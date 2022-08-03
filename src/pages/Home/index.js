import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import List from '../../components/List';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className="container">
            <div className="border--bottom">
                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>Featured</h2>
                        <span>
                            <Link
                                to="section"
                                state={{
                                    title: 'Featured',
                                    type: 'featured',
                                    country: 'VN',
                                }}
                            >
                                SEE ALL
                            </Link>
                        </span>
                    </div>
                    <List category="featured" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>Recommended for today</h2>
                        <span>
                            <Link
                                to="section"
                                state={{
                                    title: 'Recommended for today',
                                    type: 'featured',
                                    country: 'SE',
                                }}
                            >
                                SEE ALL
                            </Link>
                        </span>
                    </div>
                    <List category="featured" country="SE" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>More of what you like</h2>
                        <span>
                            <Link
                                to="section"
                                state={{
                                    title: 'More of what you like',
                                    type: 'featured',
                                    country: 'JP',
                                }}
                            >
                                SEE ALL
                            </Link>
                        </span>
                    </div>
                    <List category="featured" country="JP" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>New releases</h2>
                        <span>
                            <Link
                                to="section"
                                state={{
                                    title: 'New releases',
                                    type: 'releases',
                                    country: 'VN',
                                }}
                            >
                                SEE ALL
                            </Link>
                        </span>
                    </div>
                    <List category="releases" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>Your playlists</h2>
                        <span>
                            <Link
                                to="section"
                                state={{
                                    title: 'Your playlists',
                                    type: 'playlists',
                                }}
                            >
                                SEE ALL
                            </Link>
                        </span>
                    </div>
                    <List type="playlists" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>Your artists</h2>
                        <span>
                            <Link
                                to="section"
                                state={{
                                    title: 'Your artists',
                                    type: 'artists',
                                }}
                            >
                                SEE ALL
                            </Link>
                        </span>
                    </div>
                    <List type="artists" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>Your albums</h2>
                        <span>
                            <Link
                                to="section"
                                state={{ title: 'Your albums', type: 'albums' }}
                            >
                                SEE ALL
                            </Link>
                        </span>
                    </div>
                    <List type="albums" />
                </div>
            </div>
        </div>
    );
}

export default Home;
