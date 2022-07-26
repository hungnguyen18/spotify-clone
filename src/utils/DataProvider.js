import React, { createContext, useCallback, useState } from 'react';

const dataContext = createContext();

function DataProvider({ children }) {
    const [idTrack, setIdTrack] = useState();
    const [playlist, setplaylist] = useState({});

    const funcCallbackTrack = useCallback((id) => {
        setIdTrack(id);
    });

    const funcCallbackPlaylist = useCallback((item) => {
        setplaylist(item);
    });

    const data = {
        dataTrack: {
            id: idTrack,
            type: 'track',
            funcTrack: funcCallbackTrack,
        },
        dataPlaylist: {
            id: playlist.id,
            type: 'playlist',
            name: playlist.name,
            data: playlist,
            funcPlaylist: funcCallbackPlaylist,
        },
    };

    return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export { dataContext, DataProvider };
