import React from 'react';
import classNames from 'classnames/bind';
import { FaSpotify } from 'react-icons/fa';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login__container')}>
            <div className={cx('login__form')}>
                <h1 className={cx('login__title')}>
                    <div className={cx('login__subtitle')}>LOGIN</div> <br />
                    SUJICLOUD
                </h1>

                <button className={cx('login__btn')}>
                    <div className={cx('login__icon')}>
                        <FaSpotify />
                    </div>
                    Continue with Spotify
                </button>
            </div>
        </div>
    );
}

export default Login;
