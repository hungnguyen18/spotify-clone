import { Row, Col } from 'antd';
import React, { memo, useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import spotifyApi from '../../api/spotifyApi';
import { dataContext } from '../../utils/DataProvider';
import Genre from './Genre';
import useDebounce from '../../hooks/useDebounce';
import PlaylistTable from '../../components/PlaylistTable';
import Playlist from '../../components/Playlist';
import Artist from '../../components/Artist';
import Album from '../../components/Album';
import Podcast from '../../components/Podcast';

const cx = classNames.bind(styles);

function Search() {
    const [genres, setGenres] = useState();
    const [result, setResult] = useState({
        playlists: [],
        tracks: [],
        podcasts: [],
        albums: [],
        artists: [],
    });

    const searchContext = useContext(dataContext);
    const searchValue = useDebounce(searchContext.dataSearch.result, 500);

    // console.log(result);

    useEffect(() => {
        const getData = async () => {
            try {
                if (!!searchValue) {
                    const resSearchPlaylists = await spotifyApi.getSearch(
                        searchValue,
                        'playlist'
                    );
                    const resSearchTracks = await spotifyApi.getSearch(
                        searchValue,
                        'track'
                    );
                    const resSearchPodcasts = await spotifyApi.getSearch(
                        searchValue,
                        'show'
                    );
                    const resSearchArtists = await spotifyApi.getSearch(
                        searchValue,
                        'artist'
                    );
                    const resSearchAlbums = await spotifyApi.getSearch(
                        searchValue,
                        'album'
                    );

                    setResult({
                        playlists: resSearchPlaylists.playlists.items,
                        tracks: resSearchTracks.tracks.items,
                        podcasts: resSearchPodcasts.shows.items,
                        albums: resSearchAlbums.albums.items,
                        artists: resSearchArtists.artists.items,
                    });
                } else {
                    const resGenres = await spotifyApi.getGenres();
                    setGenres(resGenres.genres);
                }
            } catch (err) {
                console.log(err);
            }
        };

        getData();
    }, [searchValue]);

    return (
        <div className="container">
            <div className="border--bottom">
                {!!searchValue ? (
                    <>
                        <Row gutter={[30, 20]}>
                            <Col xxl={10} xl={10} md={10} sm={24} xs={24}>
                                <h3 className={cx('search__title')}>
                                    Top result
                                </h3>
                                <Playlist
                                    playlist={result.playlists[0]}
                                    liked
                                    search
                                />
                            </Col>

                            <Col xxl={14} xl={14} md={14} sm={24} xs={24}>
                                <h3 className={cx('search__title')}>Songs</h3>
                                <PlaylistTable
                                    playlist={result.tracks.slice(0, 4)}
                                    search
                                />
                            </Col>
                        </Row>

                        <h3 className={cx('search__title')}>Playlist</h3>
                        <Row gutter={[20, 20]}>
                            {result.playlists?.slice(0, 6).map((playlist) => (
                                <Col
                                    xxl={4}
                                    xl={4}
                                    md={6}
                                    sm={12}
                                    xs={12}
                                    key={playlist.id}
                                >
                                    <Playlist playlist={playlist} />
                                </Col>
                            ))}
                        </Row>

                        <h3 className={cx('search__title')}>Artists</h3>
                        <Row gutter={[20, 20]}>
                            {result.artists?.slice(0, 6).map((artist) => (
                                <Col
                                    xxl={4}
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

                        <h3 className={cx('search__title')}>Albums</h3>
                        <Row gutter={[20, 20]}>
                            {result.albums?.slice(0, 6).map((album) => (
                                <Col
                                    xxl={4}
                                    xl={4}
                                    md={6}
                                    sm={12}
                                    xs={12}
                                    key={album.id}
                                >
                                    <Album playlist={album} />
                                </Col>
                            ))}
                        </Row>

                        <h3 className={cx('search__title')}>Podcasts</h3>
                        <Row gutter={[20, 20]}>
                            {result.podcasts?.slice(0, 6).map((podcast) => (
                                <Col
                                    xxl={4}
                                    xl={4}
                                    md={6}
                                    sm={12}
                                    xs={12}
                                    key={podcast.id}
                                >
                                    <Podcast playlist={podcast} />
                                </Col>
                            ))}
                        </Row>
                    </>
                ) : (
                    <>
                        <h3 className={cx('search__title')}>Browse all</h3>
                        <Row gutter={[20, 20]}>
                            {genres?.map((genre, i) => (
                                <Genre genre={genre} key={i} />
                            ))}
                        </Row>
                    </>
                )}
            </div>
        </div>
    );
}

export default memo(Search);
