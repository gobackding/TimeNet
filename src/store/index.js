import {createStore,combineReducers,applyMiddleware} from "redux"

import Find from "./Find"
const reducer = combineReducers({
    Find
})


const store = createStore(applyMiddleware(reducer))

export default store;