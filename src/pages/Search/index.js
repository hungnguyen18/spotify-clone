import { Col, Row } from 'antd';
import React, { memo, useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import spotifyApi from '../../api/spotifyApi';
import { dataContext } from '../../utils/DataProvider';
import Genre from './Genre';
import useDebouce from '../../hooks/useDebouce';

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
    const searchValue = useDebouce(searchContext.dataSearch.result, 500);

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
                    <div>{searchValue}</div>
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
