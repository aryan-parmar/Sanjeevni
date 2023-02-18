import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18next';
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
serviceWorker.register();