import './styles.scss';
import { Configuration } from 'react-md';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

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
