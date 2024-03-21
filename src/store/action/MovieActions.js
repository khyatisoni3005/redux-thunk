import axios from "axios";
import { GET_MOVIE_LIST, POST_MOVIE, DELETE_MOVIE, PUT_MOVIE_LIST } from "../type";


export const getMovieList = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/api/movie/list")
            .then((res) => {
                let movieList = res.data
                dispatch({
                    type: GET_MOVIE_LIST,
                    payload: movieList
                })
            })
    }
}

export const deleteMovie = (movieId) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/api/movie/delete/${movieId}`)
            .then((res) => {
                dispatch({
                    type: DELETE_MOVIE,
                    payload: movieId
                })
            })
    }
}
export const addMovie = (movieData) => {

    return (dispatch) => {
        axios.post("http://localhost:5000/api/movie/create", movieData)
            .then((res) => {
                let movieRecord = res.data
                dispatch({
                    type: POST_MOVIE,
                    payload: movieRecord
                })
            })
    }

}

// Inside MovieActions.js

// export const updateMovie = (movieData) => {
//     return (dispatch) => {
//         dispatch({ type: UPDATE_MOVIE_REQUEST });
//         fetch(`https://yourapi.com/movies/${movieData._id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(movieData),
//         })
//             .then((response) => response.json())
//             .then((data) => dispatch({ type: UPDATE_MOVIE_SUCCESS, payload: data }))
//             .catch((error) => dispatch({ type: UPDATE_MOVIE_FAILURE, error }));
//     };
// };
