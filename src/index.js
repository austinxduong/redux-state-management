import React from 'react';
import { render } from 'react-dom';
// import { ThemeProvider } from 'styled-components';
import App from './components/app/App';
import { CharacterProvider } from './state/CharacterProvider';

render(
  <CharacterProvider>
    <App />
  </CharacterProvider>,
  document.getElementById('root')
);
