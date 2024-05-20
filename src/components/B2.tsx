import React, { createContext, useState } from 'react';
import ThemeContext from './ThemeContext';

export const SetContext2 = createContext(""); 

export default function B2() {
  const [theme, setTheme] = useState<string>('blue'); 

  return (
    <div>
      <h1>B2</h1>
      <SetContext2.Provider value={theme}>
        <ThemeContext />
      </SetContext2.Provider>
    </div>
  );
}