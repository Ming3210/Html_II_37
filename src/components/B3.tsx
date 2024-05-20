import React, { useContext } from 'react';

import { SetContext3 } from './ThemeContext'; 

export default function B3() {
    const theme = useContext(SetContext3);
    const buttonStyle = {
        backgroundColor: theme
    }
  return (
    <div>
        <h1>B3</h1>
        <button style={buttonStyle}>Click Me</button>
    </div>
  )
}
