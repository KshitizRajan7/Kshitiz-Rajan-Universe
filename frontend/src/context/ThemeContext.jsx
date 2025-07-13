"use client"
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setMode(storedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', mode)
        localStorage.setItem('theme', mode)
    }, [mode]);

    const ToggleTheme = () => {

        setMode(prev => (prev === 'light' ? 'dark' : ' light'));

    }

    const value = useMemo(() => ({ mode, ToggleTheme }), [mode]);
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

