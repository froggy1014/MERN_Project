import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Portal from './shared/components/Navigation/Portal';
import MainHeader from './shared/components/Navigation/MainHeader';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Portal selector="portal">
      <MainHeader />
    </Portal>
    <App />
  </BrowserRouter>
);