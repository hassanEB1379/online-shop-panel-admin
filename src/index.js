import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/index.css';
import App from './App';
import { ThemeProvider } from 'contexts/ThemeContext';
import { RTL } from 'theme';

// translation
import 'configs/i18n';
import { UserProvider } from 'contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <RTL>
        <UserProvider>
          <App />
        </UserProvider>
      </RTL>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
