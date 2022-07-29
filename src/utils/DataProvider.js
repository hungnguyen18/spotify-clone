import React, { createContext, useCallback, useState } from 'react';

const dataContext = createContext();

function DataProvider({ children }) {
    const [track, setTrack] = useState({ index: null, id: '', type: '' });
    const [playlist, setPlaylist] = useState({});
    const [header, setHeader] = useState({});

    const funcCallbackTrack = useCallback((i, id, type, playing) => {
        setTrack({ index: i, id: id, type: type, isPlaying: playing });
    }, []);

    const funcCallbackPlaylist = useCallback((item) => {
        setPlaylist(item);
    }, []);

    const funcCallbackHeader = useCallback((item) => {
        setHeader(item);
    }, []);

    const data = {
        dataTrack: {
            index: track.index,
            id: track.id,
            type: track.type,
            isPlaying: track.isPlaying || false,
            funcTrack: funcCallbackTrack,
        },
        dataPlaylist: {
            id: playlist.id,
            type: 'playlist',
            name: playlist.name,
            playlist: playlist.tracks?.items,
            funcPlaylist: funcCallbackPlaylist,
        },
        dataHeader: {
            name: header.name,
            funcHeader: funcCallbackHeader,
        },
    };

    return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export { dataContext, DataProvider };
