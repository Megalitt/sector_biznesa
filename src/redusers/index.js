import { combineReducers, createStore, applyMiddleware } from "redux";
import postReduser from "./postReduser";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const rootReduser = combineReducers({
  posts: postReduser,
});

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))