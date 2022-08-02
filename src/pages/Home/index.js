import React from 'react';
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
                        <h2>Your playlists</h2>
                        <span>
                            <Link to="/">SEE ALL</Link>
                        </span>
                    </div>
                    <List type="playlists" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>Featured</h2>
                        <span>
                            <Link to="/">SEE ALL</Link>
                        </span>
                    </div>
                    <List category="featured" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>Recommended for today</h2>
                        <span>
                            <Link to="/">SEE ALL</Link>
                        </span>
                    </div>
                    <List category="featured" country="US" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>More of what you like</h2>
                        <span>
                            <Link to="/">SEE ALL</Link>
                        </span>
                    </div>
                    <List category="featured" country="JP" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>New releases</h2>
                        <span>
                            <Link to="/">SEE ALL</Link>
                        </span>
                    </div>
                    <List category="releases" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>Your artists</h2>
                        <span>
                            <Link to="/">SEE ALL</Link>
                        </span>
                    </div>
                    <List type="artists" />
                </div>

                <div className={cx('section')}>
                    <div className={cx('section__title')}>
                        <h2>Your albums</h2>
                        <span>
                            <Link to="/">SEE ALL</Link>
                        </span>
                    </div>
                    <List type="albums" />
                </div>
            </div>
        </div>
    );
}

export default Home;
