import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme/theme';
import { RTL } from './theme/rtl';
import MediaProvider from 'contexts/MediaContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RTL>
        <MediaProvider>
          <App />
        </MediaProvider>
      </RTL>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
