import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', 'mode');
    setTheme(mode);
  };

  const toggleTheme = () => {
    if(theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const saveTheme = window.localStorage.getItem('theme');
    if(saveTheme) {
      setTheme(saveTheme);
    } else {
      setMode('light');
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];

};

