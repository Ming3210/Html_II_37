import React, { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export const UseTheme = () => useContext(ThemeContext);

import { SetContext2 } from './B2'; 

export const useTheme = () => useContext(SetContext2);

export const SetContext3 = createContext("red");


export default useTheme;