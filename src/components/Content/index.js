import React from 'react';
import { Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

import Header from '../../components/Header';
import pageRoutes from '../../routes';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('content__container')}>
            <div className={cx('content__header')}>
                <Header />
            </div>

            <div className={cx('content__content')}>
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
