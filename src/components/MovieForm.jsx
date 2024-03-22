import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie, updateMovie } from '../store/action/MovieActions'
import axios from 'axios'


function MovieForm() {
    const movieState = useSelector((state) => state.movies)
    const movieId = movieState.viewMovieId
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
        setMovieData({
            name: "",
            director: "",
            _id: "",
        })
    }

    function updateMovieData() {
        dispatch(updateMovie(movieData))
        setMovieData({
            _id: "",
            name: "",
            director: ""
        })
    }

    useEffect(() => {
        if (movieId) {
            axios.get(`http://localhost:5000/api/movie/view/${movieId}`)
                .then((res) => {
                    setMovieData(res.data)
                })
        }

    }, [movieId])

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
                            updateMovieData(movieData._id)
                        } else {
                            addMovieData()
                        }
                    }} class="btn btn-primary">

                        {
                            movieData._id && movieData ? "update" : "add"
                        }

                    </button>
                </div>
                <div className="col-3"></div>

            </div>




        </>
    )
}

export default MovieForm