import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
//...middlewares will spread in all of the methods or all of the values in this array into this function call as individual arguments.
