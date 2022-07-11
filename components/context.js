import React from 'react';

const AppContext = React.createContext(
    {
        isAuthenticated: true,
        user: null,
        setUser: () => {}
    }
);

export default AppContext;