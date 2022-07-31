import React, { createContext, useCallback, useState } from 'react';

const dataContext = createContext();

function DataProvider({ children }) {
    const [track, setTrack] = useState({ index: null, id: '', type: '' });
    const [playlist, setPlaylist] = useState({});
    const [header, setHeader] = useState({});

    const funcCallbackTrack = useCallback((i, id, type, playing) => {
        setTrack({ index: i, id: id, type: type, isPlaying: playing });
    }, []);

    const funcCallbackPlaylist = useCallback((items) => {
        setPlaylist(items);
    }, []);

    const funcCallbackHeader = useCallback((items, bgColor) => {
        setHeader({ data: items, bgColor: bgColor });
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
            name: header.data?.name,
            bgColor: header.bgColor,
            funcHeader: funcCallbackHeader,
        },
    };

    return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export { dataContext, DataProvider };
