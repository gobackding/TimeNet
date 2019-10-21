import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import Find from "./Find/Find.js"
import detail from "./Find/detail"

const reducer = combineReducers({
    Find,
    detail
})


const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store;