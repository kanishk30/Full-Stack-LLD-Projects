import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Banner = () => {

    const [bannerImg, setBannerImg] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=e278e3c498ab14e0469bf6d86da17045&language=en-US&page=1')
            .then(function (response) {
                // handle success
                console.log('Movies list::', response.data.results);
                const firstMovie = response.data.results[0]
                const firstMovieTitle = firstMovie.title
                const firstMovieImg = firstMovie.backdrop_path;

                setTitle(firstMovieTitle)
                setBannerImg(`https://image.tmdb.org/t/p/original${firstMovieImg}`)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

    return (
        <div
            className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end'
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className='text-white w-full text-center text-2xl'>{title}</div>

        </div>
    )
}

export default Banner
