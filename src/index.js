import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import GlobalStyles from './components/GlobalStyles';
import { DataProvider } from './utils/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <GlobalStyles>
        <DataProvider>
            <App />
        </DataProvider>
    </GlobalStyles>
    // </React.StrictMode>
);
