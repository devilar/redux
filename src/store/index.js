import {applyMiddleware, combineReducers, createStore} from "redux";
import {countReducer} from "./countReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {countWatcher} from "../saga/countSaga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cash:countReducer,
    customers:customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(countWatcher)