import React,{Component}  from  'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App.js';

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middleWare = [logger, thunk]

const store = createStore(
    rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleWare)),
)

ReactDom.render(
    <Provider store = {store}><App /></Provider>,
    document.getElementById('app')
);