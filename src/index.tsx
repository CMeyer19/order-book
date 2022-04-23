import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {store} from './store';
import {Provider} from 'react-redux';
import App from "./App";

const container = document.getElementById('root');

if (container) {
    const root = ReactDOMClient.createRoot(container);

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    )
}