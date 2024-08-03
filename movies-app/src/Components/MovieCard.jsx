import React from 'react'

const MovieCard = (props) => {
    console.log('props::', props) // {addToWatchList, index, and all other movie obj props.}
    const { addToWatchList, removeFromWatchList, index, movieObj, watchList } = props;

    const isMoviePresentInWatchList = () => {
        // if id is present in movies present in watchListArr. > true : else false

        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].id === movieObj.id) {
                return true;
            }
        }

        return false;

    }


    return (
        <>

            <div className='flex justify-evenly flex-wrap gap-6'>
                <div
                    className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl flex flex-col justify-between item-end hover:scale-110 duration-200 hover:cursor-pointer'
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})` }}
                    key={index}

                >
                    {isMoviePresentInWatchList() ?
                        < div
                            className='m-4 bg-gray-700/60 justify-center items-center rounded-md flex h-8 w-8'
                            onClick={() => removeFromWatchList(movieObj)}
                        // onClick={removeFromWatchList(movieObj)} WRONG, as directly we are invoking. we just want to attach the function reference.
                        >
                            ❌
                        </div>
                        : < div
                            className='m-4 bg-gray-700/60 justify-center items-center rounded-md flex h-8 w-8'
                            onClick={() => addToWatchList(movieObj)}
                        >
                            😍
                        </div>
                    }
                    <div className='text-white w-full text-center p-2 rounded-lg bg-gray-900/50'>
                        {movieObj.title}
                    </div>
                </div>

            </div >
        </>
    )
}

export default MovieCard
