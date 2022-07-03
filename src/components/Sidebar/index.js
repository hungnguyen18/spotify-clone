import React from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import SidebarButton from './SidebarButton';
import {
    AppstoreOutlined,
    HeartOutlined,
    HomeOutlined,
    RiseOutlined,
} from '@ant-design/icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar__container')}>
            <div className={cx('sidebar__wrapper')}>
                <div className={cx('sidebar__title')}>
                    <span>
                        SUJI
                        <br />
                        CLOUD
                    </span>
                </div>

                <div className={cx('sidebar__action')}>
                    <SidebarButton
                        title={'Home'}
                        icon={<HomeOutlined />}
                        to={'/'}
                    />
                    <SidebarButton
                        title={'Trending'}
                        icon={<RiseOutlined />}
                        to={'/trending'}
                    />
                    <SidebarButton
                        title={'Favorites'}
                        icon={<HeartOutlined />}
                        to={'/favorites'}
                    />
                    <SidebarButton
                        title={'Library'}
                        icon={<AppstoreOutlined />}
                        to={'/Library'}
                    />
                </div>
            </div>

            <div className={cx('sidebar__footer')}>
                <p className={cx('sidebar__info')}>
                    © 2022 Created by HungNguyen.
                    <br />
                    All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Sidebar;
