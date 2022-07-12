import React from 'react';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import styles from './Header.module.scss';
import Search from '../Search';
import User from './User';
import Button from '../Button';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icon';

const cx = classNames.bind(styles);

function Header({ shrink }) {
    const location = useLocation();

    return (
        <div className={cx('header__container', shrink)}>
            <div className={cx('header__act')}>
                <Button icon>
                    <ArrowLeftIcon />
                </Button>
                <Button icon disabled>
                    <ArrowRightIcon />
                </Button>
            </div>

            {location.pathname === '/search' && (
                <div className={cx('header__search')}>
                    <Search />
                </div>
            )}

            <div className={cx('header__user')}>
                {(location.pathname === '/' ||
                    location.pathname === '/playlist') && (
                    <div className={cx('header__btn')}>
                        <Button outline>Upgrade</Button>
                    </div>
                )}

                <User />
            </div>
        </div>
    );
}

export default Header;
