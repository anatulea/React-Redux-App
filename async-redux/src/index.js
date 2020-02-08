import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { makeupReducer as reducer } from './reducers/makeupReducer.js'
import thunk from 'redux-thunk';

const store = createStore(reducer , applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}> 
    <App />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
