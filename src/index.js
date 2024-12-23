import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/_commons/chief.css';
import './components/_commons/variables.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)