import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme/theme';
import { RTL } from './theme/rtl';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RTL>
        <App />
      </RTL>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
