import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';

export default createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(BrowserRouter)
  )
);

