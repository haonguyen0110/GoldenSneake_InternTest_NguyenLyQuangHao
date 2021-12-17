import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from './reducers/CartReducer'




const rootReducer = combineReducers({
    CartReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))