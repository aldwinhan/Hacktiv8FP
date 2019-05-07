import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk,logger)),
) 

export default store