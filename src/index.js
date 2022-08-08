import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NextUIProvider>
);

