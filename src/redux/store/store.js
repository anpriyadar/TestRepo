import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux";
import Thunk from 'redux-thunk'

const AppReducer = combineReducers(require('../reducer').default)

const store = createStore(AppReducer, applyMiddleware(Thunk))
export default store;