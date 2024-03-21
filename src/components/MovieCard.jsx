import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMovie } from "../store/action/MovieActions"
// import { viewMovie } from "../store/action/MovieActions"
function MovieCard({ movieData }) {
    const dispatch = useDispatch()
    function deleteMovieData(id) {
        dispatch(deleteMovie(id))
    }
    // function viewMovieData(id) {
    //     dispatch(viewMovie(id))
    // }
    return (
        <>
            <div className="col-3 mt-5 ">
                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">{movieData.name}</h5>
                        <p class="card-text">{movieData.director}</p>
                        <a href="#" class="btn btn-primary" onClick={() => {
                            deleteMovieData(movieData._id)
                        }}>Delete</a>
                        {/* <a href="#" class="btn btn-primary ms-3" onClick={() => {
                            viewMovieData(movieData._id)
                        }}>Update</a> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default MovieCard