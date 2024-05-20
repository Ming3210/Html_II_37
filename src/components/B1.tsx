import React, { createContext, useState, useContext } from 'react';
import UseTheme from './ThemeContext';

export const SetContext = createContext(null);

export default function B1() {
    const [name, setName] = useState(null);

    return (
        <div>
            <h1>B1</h1>
            <SetContext.Provider value={name}>

                <p>Value :<UseTheme /></p>
            </SetContext.Provider>
        </div>
    );
}

