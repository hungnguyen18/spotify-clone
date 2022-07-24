import React, { createContext, useCallback, useState } from 'react';

const dataContext = createContext();

function DataProvider({ children }) {
    const [idTrack, setIdTrack] = useState();
    const [playlist, setplaylist] = useState({});

    const funcCallbackIdTrack = useCallback((id) => {
        setIdTrack(id);
    });

    const funcCallbackPlaylist = useCallback((item) => {
        setplaylist(item);
    });

    const data = {
        dataTrack: {
            idTrack: idTrack,
            funcId: funcCallbackIdTrack,
        },
        dataPlaylist: {
            id: playlist.id,
            name: playlist.name,
            data: playlist,
            funcPlaylist: funcCallbackPlaylist,
        },
    };

    return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export { dataContext, DataProvider };
