import React from 'react';
import ReactDOM from 'react-dom';
import 'app/assets/css/index.css';
import App from './app/App';
import Providers from './app/Providers';

// translation
import 'app/configs/i18n';

// chart js defaults
import { defaults } from 'react-chartjs-2';

defaults.font.family = '"Open Sans", Vazir , sans-serif';

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={null}>
      <Providers>
        <App />
      </Providers>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
