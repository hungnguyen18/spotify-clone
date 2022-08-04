import { Col } from 'antd';
import React, { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './Genre.module.scss';

const cx = classNames.bind(styles);

function Genre({ genre }) {
    const random_rgba = () => {
        const o = Math.round,
            r = Math.random,
            s = 255;

        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s);
    };

    return (
        <Col xxl={3} xl={4} md={6} sm={12} xs={12}>
            <div
                className={cx('genre')}
                style={{ backgroundColor: random_rgba() }}
            >
                <span className={cx('genre__title')}>{genre}</span>
            </div>
        </Col>
    );
}

export default memo(Genre);
