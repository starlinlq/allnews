import {combineReducers} from "redux";
import newReducer from "./newsReducer"

const reducers = combineReducers({newsData: newReducer})

export default reducers;