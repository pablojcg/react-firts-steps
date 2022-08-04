import React from 'react';
import ReactDOM  from 'react-dom/client';
// import App from './App';
// import FirtsApp from './FirtsApp';
import CounterApp from './CounterApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={15} />
    </React.StrictMode>
);