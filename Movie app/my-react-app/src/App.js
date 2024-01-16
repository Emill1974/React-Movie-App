import React, { useEffect, useState } from 'react'

import "./App.css" 

import Movie from './movie'

export default function App() {

  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=fa1192549721df01a1fb28a7788e6608"

  const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=fa1192549721df01a1fb28a7788e6608&query="

  const [movies, setMovies] = useState([])
const [search,setSearch]=useState("")


  useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results)
    } )
  },[])

  console.log(movies)
 
function handleSubmit(e){
e.preventDefault()
fetch(API_SEARCH+search)
.then(res=>res.json())
.then((data) => 
      setMovies(data.results)
    )}

  return (
    <div className='App'>
      <div className='search-nav'>
        <div>
          <h1 className='title'>
            Movies
          </h1>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <input placeholder='search' onChange={(e)=>setSearch(e.target.value)} />
            <button>
              Search
            </button >
          </form>
        </div>

      </div>
      <div className='movies'>
        {movies.map((movie) =>
          <Movie {...movie} />
        )}
      </div>

    </div>
  )
}
