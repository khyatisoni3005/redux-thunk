import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../store/action/MovieActions'


function MovieForm() {
    const [movieData, setMovieData] = useState({
        name: "",
        director: ""
    })
    const dispatch = useDispatch()

    function handleChange(e) {
        setMovieData({
            ...movieData,
            [e.target.name]: e.target.value
        })
    }

    function addMovieData() {
        dispatch(addMovie(movieData))
    }
    return (
        <>

            <div className="row mt-5 ">
                <div className="col-3"></div>
                <div className="col-6">
                    <div class="mb-3 ">
                        <label for="exampleInputEmail1" class="form-label">ENTER NAME</label>
                        <input type="text" class="form-control" name='name' value={movieData.name} onChange={handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">ENTER DIRECTOR NAME</label>
                        <input type="text" class="form-control" name='director' onChange={handleChange} value={movieData.director} />
                    </div>

                    <button type="submit" onClick={() => {
                        if (movieData._id && movieData) {

                        } else {
                            addMovieData()
                        }
                    }} class="btn btn-primary">Submit</button>
                </div>
                <div className="col-3"></div>

            </div>




        </>
    )
}

export default MovieForm