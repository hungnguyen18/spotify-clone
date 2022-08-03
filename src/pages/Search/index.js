import { Col, Row } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import spotifyApi from '../../api/spotifyApi';

const cx = classNames.bind(styles);

function Search() {
    const [genres, setGenres] = useState();

    const random_rgba = () => {
        const o = Math.round,
            r = Math.random,
            s = 255;

        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const resGenres = await spotifyApi.getGenres();
                setGenres(resGenres.genres);
            } catch (err) {
                console.log(err);
            }
        };

        getData();
    }, []);

    return (
        <div className="container">
            <div className="border--bottom">
                <h3 className={cx('search__title')}>Browse all</h3>
                <Row gutter={[20, 20]}>
                    {genres?.map((genre) => (
                        <Col xxl={3} xl={4} md={6} sm={12} xs={12}>
                            <div
                                className={cx('genre')}
                                style={{ backgroundColor: random_rgba() }}
                            >
                                <span className={cx('genre__title')}>
                                    {genre}
                                </span>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default memo(Search);
