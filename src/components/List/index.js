import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Col, Row } from 'antd';

import styles from './List.module.scss';
import Playlist from '../Playlist';
import Podcast from '../Podcast';
import Album from '../Album';
import Artist from '../Artist';
import spotifyApi from '../../api/spotifyApi';

const cx = classNames.bind(styles);

function List({ type, category, country = 'VN' }) {
    const [items, setItems] = useState([]);

    const Comp = (type, item) => {
        if (category) {
            switch (category) {
                case 'featured':
                    return <Playlist playlist={item} />;
                case 'releases':
                    return <Album playlist={item} />;
                default:
                    console.log('default');
            }
        } else {
            switch (type) {
                case 'playlists':
                    return <Playlist playlist={item} />;
                case 'podcasts':
                    return <Podcast playlist={item} />;
                case 'albums':
                    return <Album playlist={item} />;
                case 'artists':
                    return <Artist playlist={item} />;
                default:
                    console.log('default');
            }
        }
    };

    useEffect(() => {
        const getItems = async () => {
            let res = null;

            if (category) {
                switch (category) {
                    case 'featured':
                        res = await spotifyApi.getFeaturedPlaylists(country);
                        setItems(res.playlists?.items.slice(0, 6));
                        break;
                    case 'releases':
                        res = await spotifyApi.getNewReleases(country);
                        setItems(res.albums?.items.slice(0, 6));
                        break;
                    default:
                        console.log('default');
                }
            } else {
                switch (type) {
                    case 'playlists':
                        res = await spotifyApi.getMyPlaylists();
                        setItems(res?.items.slice(0, 6));
                        break;
                    case 'podcasts':
                        res = await spotifyApi.getMyPodcasts();
                        setItems(res.items.slice(0, 6));
                        break;
                    case 'albums':
                        res = await spotifyApi.getMyAlbums();
                        setItems(res.items?.slice(0, 6));
                        break;
                    case 'artists':
                        res = await spotifyApi.getFollowedArtists();
                        setItems(res?.artists.items.slice(0, 6));
                        break;
                    default:
                        console.log('default');
                }
            }
        };

        getItems();
    }, []);

    // console.log(items);

    return (
        <div>
            <Row gutter={[20, 20]}>
                {items?.map((item, i) => {
                    const itemType = type === 'albums' ? item.album : item;

                    return (
                        <Col xl={4} md={6} sm={12} xs={12} key={i}>
                            {Comp(type, itemType)}
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default List;
