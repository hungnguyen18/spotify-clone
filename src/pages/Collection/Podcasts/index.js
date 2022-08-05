import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Podcasts.module.scss';
import spotifyApi from '../../../api/spotifyApi';
import { Col, Row } from 'antd';
import Podcast from '../../../components/Podcast';

const cx = classNames.bind(styles);

function Podcasts() {
    const [podcasts, setPodcasts] = useState();
    const [episodes, setEpisodes] = useState();
    const [skeleton, setSkeleton] = useState(true);

    useEffect(() => {
        const getMyPodcasts = async () => {
            try {
                const resShow = await spotifyApi.getMyPodcasts();
                const resEpisodes = await spotifyApi.getMyEpisodesLiked(0, 1);

                setPodcasts(resShow.items);
                setEpisodes(resEpisodes);
                setTimeout(() => {
                    setSkeleton(false);
                }, 200);
            } catch (err) {
                console.log(err);
                setSkeleton(true);
            }
        };

        getMyPodcasts();
    }, []);

    return (
        <div className="container">
            <div className="border--bottom">
                <h3 className={cx('podcasts__title')}>Podcasts</h3>

                <Row gutter={[20, 20]}>
                    <Col xxl={6} xl={8} md={18} sm={24} xs={24}>
                        <Podcast
                            playlist={episodes}
                            skeleton={skeleton}
                            liked
                        />
                    </Col>

                    {podcasts?.map((podcast) => (
                        <Col
                            xxl={3}
                            xl={4}
                            md={6}
                            sm={12}
                            xs={12}
                            key={podcast.show.id}
                        >
                            <Podcast playlist={podcast.show} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Podcasts;
