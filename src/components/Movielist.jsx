import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import { getMovieList } from '../store/action/MovieActions'


export const MovieList = () => {

    const movieState = useSelector((state) => state.movies)
    const movieList = movieState.movieList

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovieList())

    }, [])

    return (
        <>
            <div className='row'>

                {

                    movieList.map((movie, i) => {

                        return (


                            <MovieCard key={i} index={i} movieData={movie} />

                        )
                    })

                }
            </div>

        </>
    )
}
