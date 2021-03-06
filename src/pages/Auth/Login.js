import React from 'react';
import classNames from 'classnames/bind';
import { FaSpotify } from 'react-icons/fa';

import styles from './Login.module.scss';
import { loginEndpoint } from '../../api/spotifyAuth';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login__container')}>
            <div className={cx('login__form')}>
                <h1 className={cx('login__title')}>
                    <div className={cx('login__subtitle')}>LOGIN</div> <br />
                    SPOTIFY
                </h1>

                <a className={cx('login__btn')} href={loginEndpoint}>
                    <div className={cx('login__icon')}>
                        <FaSpotify />
                    </div>
                    Continue with Spotify
                </a>
            </div>
        </div>
    );
}

export default Login;
