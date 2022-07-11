import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Search from '../Search';

import User from './User';
import Button from '../Button';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icon';

const cx = classNames.bind(styles);

function Header({ shrink }) {
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

            <div className={cx('header__search')}>
                <Search />
            </div>

            <User />
        </div>
    );
}

export default Header;
