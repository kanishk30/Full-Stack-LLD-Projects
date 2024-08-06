import React, { useEffect, useState } from 'react'
import genreids from '../constants';

const getGenreName = genre_id => {
  console.log(genreids[genre_id] || 'NA')
  return genreids[genre_id] || 'NA';
}


function WatchList() {
  const [watchList, setWatchList] = useState([]);
  useEffect(() => {
    let moviesFromLS = localStorage.getItem('movies');
    if (moviesFromLS) {
      setWatchList(JSON.parse(moviesFromLS));
    }
  }, [])

  const handleAscRatings = () => {
    console.log('Asc sort');
    let sortedOrder = watchList.sort((a, b) => a.vote_average - b.vote_average);

    setWatchList([...sortedOrder])

    // [{title, vote_average: 7}, {vote_average: 5}]
  }

  const handleDescRatings = () => {
    console.log('Desc sort');
    let sortedOrder = watchList.sort((a, b) => b.vote_average - a.vote_average);

    setWatchList([...sortedOrder])
  }


  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm
  text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">
                <i className='fa-solid fa-arrow-up cursor-pointer pr-1' onClick={handleAscRatings}></i>
                <div>Ratings</div>
                <i className='fa-solid fa-arrow-down cursor-pointer pl-1' onClick={handleDescRatings}></i>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Popularity</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Genre</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList.map((movie) => {
            return (<tr className="hover:bg-gray-50">
              <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                <img className="h-[6rem] w-[10rem] object-fit" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                <div className="font-medium text-gray-700 text-sm">{movie.title}</div>
              </td>
              <td className="pl-6 py-4">{movie.vote_average}</td>
              <td className="pl-6 py-4">{movie.popularity}</td>
              <td className="pl-2 py-4">{getGenreName(movie.genre_ids[0])}</td>
            </tr>)
          })}

        </tbody>
      </table>
    </div>
  );
}
export default WatchList;
