import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import loggingMiddleware from "redux-logger"

// const reducer = combineReducers()
const placeholderReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

let store = createStore(placeholderReducer, applyMiddleware(loggingMiddleware))

export default store;
