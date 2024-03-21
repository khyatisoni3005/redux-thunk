import { combineReducers } from "redux";
import { movieReducer } from "./MovieReducers"

const rootReducer = combineReducers({
    movies: movieReducer
})

export default rootReducer