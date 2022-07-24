import React, { createContext, useCallback, useState } from 'react';

const dataContext = createContext();

function DataProvider({ children }) {
    const [idTrack, setIdTrack] = useState();

    const funcCallbackIdTrack = useCallback((id) => {
        setIdTrack(id);
    });

    const data = {
        idTrack: idTrack,
        funcId: funcCallbackIdTrack,
    };

    return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export { dataContext, DataProvider };
