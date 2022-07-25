import React from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './MenuLibrary.module.scss';

const cx = classNames.bind(styles);

function MenuLibrary({ handleSetLocationMenu }) {
    return (
        <div className={cx('header__menu')}>
            <NavLink
                className={(nav) =>
                    cx('menu__item', {
                        active: nav.isActive,
                    })
                }
                to="/collection/playlists"
                onClick={() => handleSetLocationMenu('playlists')}
            >
                <span>Playlist</span>
            </NavLink>

            <NavLink
                className={(nav) =>
                    cx('menu__item', {
                        active: nav.isActive,
                    })
                }
                to="/collection/podcasts"
                onClick={() => handleSetLocationMenu('podcasts')}
            >
                <span>Podcasts</span>
            </NavLink>

            <NavLink
                className={(nav) =>
                    cx('menu__item', {
                        active: nav.isActive,
                    })
                }
                to="/collection/artists"
                onClick={() => handleSetLocationMenu('artists')}
            >
                <span>Artists</span>
            </NavLink>

            <NavLink
                className={(nav) =>
                    cx('menu__item', {
                        active: nav.isActive,
                    })
                }
                to="/collection/albums"
                onClick={() => handleSetLocationMenu('albums')}
            >
                <span>Albums</span>
            </NavLink>
        </div>
    );
}

export default MenuLibrary;
