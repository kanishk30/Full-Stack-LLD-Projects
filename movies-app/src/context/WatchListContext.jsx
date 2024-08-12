import { createContext, useState, useEffect } from "react";

const WatchListContext = createContext()

export default function WatchListContextWrapper(props) {
    const [watchList, setWatchList] = useState([])

    useEffect(() => {
        let moviesFromLS = localStorage.getItem('movies');
        if (moviesFromLS) {
            setWatchList(JSON.parse(moviesFromLS));
        }
    }, [])

    const addToWatchList = (movieObj) => {
        const updatedMovies = [...watchList, movieObj]
        setWatchList(updatedMovies);
        localStorage.setItem('movies', JSON.stringify(updatedMovies))
    }

    const removeFromWatchList = movieObj => {
        const filteredMovies = watchList.filter((watchListMovie) => {
            return movieObj.id !== watchListMovie.id
        })
        setWatchList(filteredMovies);
        localStorage.setItem('movies', JSON.stringify(filteredMovies))
    }

    console.log(props.children, '[[props.children]]')
    return <WatchListContext.Provider
        value={{ addToWatchList, removeFromWatchList, watchList, setWatchList }}
    >
        {props.children}
    </WatchListContext.Provider>
}

export { WatchListContext }