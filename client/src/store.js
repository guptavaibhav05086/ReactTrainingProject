import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//Index.js will automatically refered here as it is the entry point for reducers folder

import rootReducer from "./reducers";

const initialState = {};
//Alias for thunk
const middleware = [thunk];
//functions from store to create a new store
//compose will provide access to redux dev tool extension through middleware
//using the spread operator (...) with middle ware inside compose means what ever we are getting in middleware from actions will pass everything to the store as it is using spread operator.
///
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
