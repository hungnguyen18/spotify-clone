import React, { createContext, useCallback, useState } from 'react';

const dataContext = createContext();

function DataProvider({ children }) {
    const [track, setTrack] = useState({ index: null, id: '', type: '' });
    const [playlist, setplaylist] = useState({});

    const funcCallbackTrack = useCallback((i, id, type) => {
        setTrack({ index: i, id: id, type: type });
    });

    const funcCallbackPlaylist = useCallback((item) => {
        setplaylist(item);
    });

    const data = {
        dataTrack: {
            index: track.index,
            id: track.id,
            type: track.type,
            funcTrack: funcCallbackTrack,
        },
        dataPlaylist: {
            id: playlist.id,
            type: 'playlist',
            name: playlist.name,
            playlist: playlist.tracks?.items,
            funcPlaylist: funcCallbackPlaylist,
        },
    };

    return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export { dataContext, DataProvider };
