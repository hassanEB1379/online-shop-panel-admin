import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/index.css';
import App from './App';
import { ThemeProvider } from 'contexts/ThemeContext';
import { RTL } from 'theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <RTL>
        <App />
      </RTL>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
