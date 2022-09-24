import React from 'react';
import ReactDOM from 'react-dom/client';

import { Configuration } from 'react-md';
import App from './App';
import './App.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Configuration>
      <App />
    </Configuration>
  </React.StrictMode>
);
