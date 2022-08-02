import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Albums.module.scss';
import { Col, Row } from 'antd';
import Album from '../../../components/Album';
import spotifyApi from '../../../api/spotifyApi';

const cx = classNames.bind(styles);

function Albums() {
    const [albums, setAlbums] = useState();

    useEffect(() => {
        const getMyAlbums = async () => {
            try {
                const res = await spotifyApi.getMyAlbums();

                setAlbums(res.items);
            } catch (err) {
                console.log(err);
            }
        };

        getMyAlbums();
    }, []);

    return (
        <div className="container">
            <div className="border--bottom">
                <h3 className={cx('library__title')}>Albums</h3>

                <Row gutter={[20, 20]}>
                    {albums?.map((album) => (
                        <Col
                            xxl={3}
                            xl={4}
                            md={6}
                            sm={12}
                            xs={12}
                            key={album.id}
                        >
                            <Album album={album} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Albums;
