import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Artists.module.scss';
import Artist from '../../../components/Artist';
import { Col, Row } from 'antd';
import spotifyApi from '../../../api/spotifyApi';

const cx = classNames.bind(styles);

function Artists() {
    const [artists, setArtists] = useState();

    useEffect(() => {
        const getFollowedArtists = async () => {
            try {
                const res = await spotifyApi.getFollowedArtists();

                setArtists(res.artists.items);
            } catch (err) {
                console.log(err);
            }
        };

        getFollowedArtists();
    }, []);

    return (
        <div className="container">
            <div className="border--bottom">
                <h3 className={cx('library__title')}>Artists</h3>

                <Row gutter={[20, 20]}>
                    {artists?.map((artist) => (
                        <Col
                            xxl={3}
                            xl={4}
                            md={6}
                            sm={12}
                            xs={12}
                            key={artist.id}
                        >
                            <Artist playlist={artist} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Artists;
