import React from 'react';
import classNames from 'classnames/bind';

import styles from './SidebarButton.module.scss';
import { Link, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarButton({ title, icon, to }) {
    const location = useLocation();

    const isActive = location.pathname === to;

    const btnClass = isActive && 'active';

    return (
        <Link to={to}>
            <div className={cx('sidebar__btn', btnClass)} title={title}>
                <div className={cx('sidebar__wrapper')}>
                    <span className={cx('sidebar__icon')}>{icon}</span>
                    <span>{title}</span>
                </div>
            </div>
        </Link>
    );
}

export default SidebarButton;
