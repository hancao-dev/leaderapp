import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new `react-dom/client` instead of `react-dom`
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);  // Create a root using the new API

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
