import React from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './MenuLibrary.module.scss';

const cx = classNames.bind(styles);

function MenuLibrary() {
    return (
        <div className={cx('header__menu')}>
            <NavLink
                className={(nav) =>
                    cx('menu__item', {
                        active: nav.isActive,
                    })
                }
                to="/collection/playlists"
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
            >
                <span>Albums</span>
            </NavLink>
        </div>
    );
}

export default MenuLibrary;
