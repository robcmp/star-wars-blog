import React, { useState, useEffect } from "react";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = (props) => {
        const [state, setState] = useState();

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };

    return StoreWrapper;
};

export default injectContext;