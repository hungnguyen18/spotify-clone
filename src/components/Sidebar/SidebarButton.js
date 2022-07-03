import React from 'react';
import { Button } from 'antd';
import classNames from 'classnames/bind';

import styles from './SidebarButton.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarButton({ title, icon, to }) {
    return (
        <Link to={to}>
            <Button
                type="ghost"
                className={cx('sidebar__btn')}
                title={title}
                icon={icon}
            >
                {title}
            </Button>
        </Link>
    );
}

export default SidebarButton;
