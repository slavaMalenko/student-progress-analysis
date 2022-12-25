import React from 'react';

export const StorageContext = React.createContext();

export const StorageProvider = ({ children, store }) =>
    <StorageContext.Provider value={store}>
        {children}
    </StorageContext.Provider>;

export const useStore = () => React.useContext(StorageContext);