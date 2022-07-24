import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

import Header from '../Header';
import pageRoutes from '../../routes';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
    const [shrink, setShrink] = useState({ shrink: '', shrinkPlay: false });

    useEffect(() => {
        const body = document.getElementById('body');

        const shrinkHeader = () => {
            if (body.scrollTop > 30 && body.scrollTop < 400) {
                setShrink({ ...shrink, shrink: 'shrink' });
            } else if (body.scrollTop > 400) {
                setShrink({ shrink: 'shrink', shrinkPlay: true });
            } else {
                setShrink({ shrink: '', shrinkPlay: false });
            }
        };

        body.addEventListener('scroll', shrinkHeader);

        return () => {
            body.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div className={cx('content__container')}>
            <div className={cx('content__header')}>
                <Header shrink={shrink} />
            </div>

            <div id="body" className={cx('content__body')}>
                <Routes>
                    {pageRoutes.map((route, index) => {
                        const Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        );
                    })}
                </Routes>
            </div>
        </div>
    );
}

export default Content;
