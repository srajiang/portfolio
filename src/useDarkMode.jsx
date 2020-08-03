import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [ theme, setTheme ] = useState('dark');

  const setMode = mode => {
    console.log('setting', mode);
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }

  const toggleTheme = () => {
    console.log('toggling');
    theme === 'dark' ? setMode('light') : setMode('dark');
  };

  /* runs default once on load */
  useEffect(() => {
    const currTheme = window.localStorage.getItem('theme');
    currTheme && setTheme(currTheme);
  }, []);

  return [ theme, toggleTheme ];

}