import { useState } from "react"
import moviesDataJSON from "../movies-data.json"
import MovieCard from "./MovieCard"
import AddMovie from "./AddMovie"
import FilterMovies from "./FilterMovies"

function MovieList() {
  const [moviesData, setMoviesData] = useState(moviesDataJSON)
  const [movies, setMovies] = useState(moviesDataJSON)

  const addNewMovie = (newMovie) => {
    const updatedMoviesData = [...moviesData, newMovie]
    const updatedMovies = [...movies, newMovie]

    setMoviesData(updatedMoviesData)
    setMovies(updatedMovies)
  }

  // CHALLENGE: Implement the deleteMovie function
	const deleteMovie = (id) => {
    const filteredMoviesData = moviesData.filter(movie => {
      return movie._id !== id
    })

    const filteredMovies = movies.filter(movie => {
      return movie._id !== id
    })

    setMoviesData(filteredMoviesData)
    setMovies(filteredMovies)
  }

  const filterMovieList = (str) => {
    let filteredMovies
    if (str === "All") {
      filteredMovies = moviesData
    } else {
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase()
      })
    }

    setMovies(filteredMovies)
  }

  return (
    <div>
      <FilterMovies filterMovies={filterMovieList} />
      <AddMovie addMovie={addNewMovie} />
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />
      })}
    </div>
  )
}

export default MovieList
