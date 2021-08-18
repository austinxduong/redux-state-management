/* eslint-disable max-len */
import React from 'react';
import { useTheme } from '../../state/ThemeProvider';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';
import Toggle from './Toggle';

export default function ThemeToggle() {

  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

