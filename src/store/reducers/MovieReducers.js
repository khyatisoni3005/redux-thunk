import { GET_MOVIE_LIST, POST_MOVIE, DELETE_MOVIE, PUT_MOVIE_LIST, VIEW_MOVIE_ID, UPDATE_MOVIE } from "../type";
import {
    UPDATE_MOVIE_SUCCESS,
    UPDATE_MOVIE_REQUEST,
    UPDATE_MOVIE_FAILURE,
    // Include other action types as necessary
} from "../type";


let initialState = {
    movieList: [],
    error: null,
    isLoading: null,
    viewMovieId: null
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_LIST:
            return { ...state, movieList: action.payload }
        case POST_MOVIE:
            const newMovieList = [...state.movieList, action.payload]
            return { ...state, movieList: newMovieList }
        case DELETE_MOVIE:
            return {
                ...state,
                movieList: state.movieList.filter((m) => m._id !== action.payload)
            }
        case UPDATE_MOVIE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movieList: state.movieList.map((movie) =>
                    movie._id === action.payload._id ? action.payload : movie
                ),
            };
        case UPDATE_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case VIEW_MOVIE_ID:
            console.log("VIEW_MOVIE_ID", action.payload);
            return {
                ...state,
                viewMovieId: action.payload
            }
        case UPDATE_MOVIE:
            console.log("action.payload");
            return {
                ...state,
                movieList: state.movieList.map((m) => {
                    if (m._id === action.payload._id) {
                        return action.payload
                    }
                    return m
                }),
                viewMovieId: null
            }
        default: return state
    }
}
