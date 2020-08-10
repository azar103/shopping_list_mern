
import itemsReducer from './reducers/itemsReducer'
import thunk from 'redux-thunk'
const { createStore, applyMiddleware, compose, combineReducers } = require("redux");

const middleware = [thunk]
const rootReducer = combineReducers({itemsReducer})
const store = createStore(rootReducer, 
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

export default store;