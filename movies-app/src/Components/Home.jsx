import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard'
import Banner from './Banner'
import axios from 'axios'
import { WatchListContext } from '../context/WatchListContext'
import { useSelector, useDispatch } from 'react-redux'

import PaginationSlice from "../redux/paginationSlice";
const paginationActions = PaginationSlice.actions;

function Movies() {
  const [movies, setMovies] = useState([
  ])
  // const [pageNo, setPageNo] = useState(1);

  const { pageNo } = useSelector((state) => state.PaginationSlice);
  const dispatch = useDispatch();

  // const [watchList, setWatchList] = useState([])

  const { addToWatchList, removeFromWatchList, watchList, setWatchList } = useContext(WatchListContext)
  console.log(addToWatchList, '[addToWatchList]')
  console.log(removeFromWatchList, '[removeFromWatchList]')
  console.log(watchList, '[watchList]')
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

  useEffect(() => {
    // on page load, set the watchlist from LS
    const watchListMovies = localStorage.getItem('movies');
    if (watchListMovies) {
      // setWatchList(watchListMovies); // wrong
      setWatchList(JSON.parse(watchListMovies));
    }
  }, [])

  const handleNextPage = () => {
    // increment pageNo.
    // setPageNo(pageNo + 1);
    dispatch(paginationActions.handleNext());

  }

  const handlePrevious = () => {
    dispatch(paginationActions.handlePrevious());
  }

  // const handlePrev = () => {
  //   // decrement page no.
  //   if (pageNo === 1) {
  //     setPageNo(1);
  //   } else {
  //     setPageNo(pageNo - 1)
  //   }
  // }

  // const addToWatchList = (movieObj) => {
  //   const updatedMovies = [...watchList, movieObj]
  //   setWatchList(updatedMovies);
  //   localStorage.setItem('movies', JSON.stringify(updatedMovies))
  // }

  // const removeFromWatchList = movieObj => {
  //   const filteredMovies = watchList.filter((watchListMovie) => {
  //     return movieObj.id !== watchListMovie.id
  //   })
  //   setWatchList(filteredMovies);
  //   localStorage.setItem('movies', JSON.stringify(filteredMovies))
  // }


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


    <Pagination
      nextPageFn={handleNextPage}
      previousPageFn={handlePrevious}
      pageNo={pageNo}
    />

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
