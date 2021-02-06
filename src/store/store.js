import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";


const initialState = {};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
  // applyMiddleware(thunk)
);


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// Redux Store
// export const store = createStore(reducer, {}, composeEnhancers(
//   applyMiddleware(thunk.withExtraArgument())
// ))

export default store;