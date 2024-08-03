import React, { useEffect } from 'react'
import { useState } from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard'
import Banner from './Banner'
import axios from 'axios'


function Movies() {
  const [movies, setMovies] = useState([
  ])
  const [pageNo, setPageNo] = useState(1);

  const [watchList, setWatchList] = useState([])


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=e278e3c498ab14e0469bf6d86da17045&language=en-US&page=${pageNo}`)
      .then(function (response) {
        // handle success
        console.log('Movies list in <Home/>::', response.data.results, 'Page No. :: ', pageNo);

        setMovies(response.data.results)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [pageNo])

  const handleNext = () => {
    // increment pageNo.
    setPageNo(pageNo + 1);
  }

  const handlePrev = () => {
    // decrement page no.
    if (pageNo === 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1)
    }
  }

  const addToWatchList = (movieObj) => {
    const updatedMovies = [...watchList, movieObj]
    setWatchList(updatedMovies);
  }

  const removeFromWatchList = movieObj => {
    const filteredMovies = watchList.filter((watchListMovie) => {
      return movieObj.id !== watchListMovie.id
    })
    setWatchList(filteredMovies);
  }


  return <>
    <div className='text-2xl font-bold text-center m-4'>

      <h2>Trending Movies:</h2>
    </div>
    <div className='flex justify-evenly flex-wrap gap-6'>
      {movies.map((movieObj, index) => <MovieCard
        // {...movieObj}
        movieObj={movieObj}
        index={index}
        watchList={watchList}
        addToWatchList={addToWatchList}
        removeFromWatchList={removeFromWatchList}
      />)}
    </div>



    {/* for pagination:: */}
    <Pagination handleNext={handleNext} handlePrev={handlePrev} pageNo={pageNo} />

  </>
}

const Home = () => {
  return (
    <div>
      Home
      <Banner />
      <Movies />
    </div>
  )
}

export default Home
