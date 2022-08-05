import { Row, Col } from 'antd';
import React, { memo, useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import spotifyApi from '../../api/spotifyApi';
import { dataContext } from '../../utils/DataProvider';
import Genre from './Genre';
import useDebounce from '../../hooks/useDebounce';
import Button from '../../components/Button';
import { HeartIcon, PlayIcon } from '../../components/Icon';
import PlaylistTable from '../../components/PlaylistTable';

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

    console.log(result);

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
                    <Row gutter={[30, 20]}>
                        <Col xxl={10} xl={10} md={10} sm={24} xs={24}>
                            <h3 className={cx('search__title')}>Top result</h3>

                            <div className={cx('result__playlist')}>
                                <div className={cx('result__img')}>
                                    <img
                                        src="https://seeded-session-images.scdn.co/v1/img/artist/5OvCh1Nin8AGw7OkxYinBe/en"
                                        alt=""
                                    />
                                </div>

                                <h2 className={cx('result__name')}>
                                    Tiên Tiên Radio
                                </h2>

                                <div className={cx('result__info')}>
                                    <span className={cx('result__author')}>
                                        By lafille
                                    </span>
                                    <span className={cx('result__type')}>
                                        PLAYLIST
                                    </span>
                                </div>

                                <div className={cx('result__fade')}>
                                    <Button play small>
                                        <PlayIcon />
                                    </Button>
                                </div>
                            </div>
                        </Col>

                        <Col xxl={14} xl={14} md={14} sm={24} xs={24}>
                            <h3 className={cx('search__title')}>Songs</h3>
                            <PlaylistTable
                                playlist={result.tracks.slice(0, 4)}
                                search
                            />
                        </Col>
                    </Row>
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
