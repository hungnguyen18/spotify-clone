import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import spotifyApi from '../../api/spotifyApi';
import Album from '../../components/Album';
import Artist from '../../components/Artist';
import Playlist from '../../components/Playlist';

function Section() {
    const [items, setItems] = useState();
    const location = useLocation();

    const Comp = (item) => {
        switch (location.state.type) {
            case 'featured':
            case 'playlists':
                return <Playlist playlist={item} />;
            case 'releases':
            case 'albums':
                return <Album playlist={item} />;
            case 'artists':
                return <Artist playlist={item} />;

            default:
                console.log('default');
        }
    };

    useEffect(() => {
        let res = null;

        const getSections = async () => {
            try {
                switch (location.state.type) {
                    case 'featured':
                        res = await spotifyApi.getFeaturedPlaylists(
                            location.state.country
                        );
                        setItems(res.playlists.items);
                        break;
                    case 'releases':
                        res = await spotifyApi.getNewReleases(
                            location.state.country
                        );
                        setItems(res.albums.items);
                        break;
                    case 'playlists':
                        res = await spotifyApi.getMyPlaylists();
                        setItems(res.items);
                        break;
                    case 'artists':
                        res = await spotifyApi.getFollowedArtists();
                        setItems(res.artists.items);
                        break;
                    case 'albums':
                        res = await spotifyApi.getMyAlbums();
                        setItems(res.items);
                        break;
                    default:
                        console.log('default');
                }
            } catch (err) {
                console.log(err);
            }
        };

        getSections();
    }, []);

    return (
        <div className="container">
            <div className="border--bottom">
                <h2
                    style={{
                        color: 'white',
                        fontWeight: '700',
                        padding: '10px 0 20px 0',
                    }}
                >
                    {location.state.title}
                </h2>
                <Row gutter={[20, 20]}>
                    {items?.map((item, i) => {
                        const itemType =
                            location.state.type === 'albums'
                                ? item.album
                                : item;

                        return (
                            <Col xxl={3} xl={4} md={6} sm={12} xs={12} key={i}>
                                {Comp(itemType)};
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default Section;
