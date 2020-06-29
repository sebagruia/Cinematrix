import {combineReducers} from "redux";
import movies from "./index_reducers";
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({movies, loadingBar: loadingBarReducer});

export default rootReducer;