import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';

 import reducers  from './reducers';
 import {Provider} from  'react-redux';

 

import registerServiceWorker from './registerServiceWorker';

const  createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store ={createStoreWithMiddleware(reducers)}>
    <App/>
     </Provider> ,

     document.getElementById('root')
);


    
registerServiceWorker();

