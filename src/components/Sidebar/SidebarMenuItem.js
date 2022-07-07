import React from 'react';
import classNames from 'classnames/bind';

import styles from './SidebarMenuItem.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarMenuItem({ title, icon, to, iconActive, gradient }) {
    return to === '/create' || to === '/liked' ? (
        <NavLink
            to={to}
            className={(nav) => cx('sidebar__menu', { active: nav.isActive })}
        >
            <div className={cx('icon__wrapper', gradient)}>
                <span className={cx('sidebar__icon-non')}>{icon}</span>
            </div>
            <span className={cx('sidebar__title-non')}>{title}</span>
        </NavLink>
    ) : (
        <>
            <NavLink
                to={to}
                className={(nav) =>
                    cx('sidebar__menu', { active: nav.isActive })
                }
            >
                <span className={cx('sidebar__icon')}>{icon}</span>
                <span className={cx('sidebar__icon-active')}>{iconActive}</span>
                <span className={cx('sidebar__title')}>{title}</span>
            </NavLink>
        </>
    );
}

export default SidebarMenuItem;
