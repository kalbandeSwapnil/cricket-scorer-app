import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import {mainReducer} from './main/mainReducer'

const store = createStore(
    mainReducer,
    applyMiddleware(logger)
)
    


ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
            <App />
        </Provider>
    </BrowserRouter>,document.getElementById('root')
);

serviceWorker.unregister();
