import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './styles/fonts.css';
import './styles/index.css';
import './styles/button.css';
import './styles/app.css';
const fixRouting = () => window.location.pathname.replace(/(\/[^/]+)$/, '');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={fixRouting()}>
      <App />
    </Router>
  </React.StrictMode>
);
