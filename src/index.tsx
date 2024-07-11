import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
//import './index.css';

const element = document.getElementById('root');

if (element === null) throw new Error('Dont find root html element');

const root = createRoot(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
