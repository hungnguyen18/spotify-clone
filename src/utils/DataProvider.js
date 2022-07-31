import React, { createContext, useCallback, useState } from 'react';

const dataContext = createContext();

function DataProvider({ children }) {
    const [track, setTrack] = useState({});
    const [playlist, setPlaylist] = useState({});
    const [header, setHeader] = useState({});

    const funcCallbackTrack = useCallback((i, id, type, playing) => {
        setTrack({ index: i, id: id, type: type, isPlaying: playing });
    }, []);

    const funcCallbackPlaylist = useCallback((id, name, playlist) => {
        setPlaylist({ id: id, name: name, playlist: playlist });
    }, []);

    const funcCallbackHeader = useCallback((id, name, playlist, bgColor) => {
        setHeader({ id: id, name: name, playlist: playlist, bgColor: bgColor });
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
            name: playlist.name,
            playlist: playlist.playlist,
            funcPlaylist: funcCallbackPlaylist,
        },
        dataHeader: {
            id: header.id,
            name: header.name,
            playlist: header.playlist,
            bgColor: header.bgColor,
            funcHeader: funcCallbackHeader,
        },
    };

    return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export { dataContext, DataProvider };
