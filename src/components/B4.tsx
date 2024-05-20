import React, { useContext, useState } from 'react';
import { SetContext3 } from './ThemeContext';

export default function B4() {
    const theme = useContext(SetContext3);
    const [backgroundColor, setBackgroundColor] = useState<string>(theme);
    
    const toggleColor = () => {
        setBackgroundColor( backgroundColor === 'blue' ? 'red' : 'blue');
    };

    const buttonStyle = {
        backgroundColor: backgroundColor
    };

    return (
        <div>
            <h1>B4</h1>
            <button style={buttonStyle} onClick={toggleColor}>{backgroundColor === 'blue' ? 'Blue' : 'Red'}</button>
        </div>
    );
}
