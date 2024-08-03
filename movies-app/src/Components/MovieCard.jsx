import React from 'react'

const MovieCard = (props) => {
    console.log(props)
    return (
        <>

            <div className='flex justify-evenly flex-wrap gap-6'>
                <div
                    className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl flex flex-col justify-between item-end hover:scale-110 duration-200 hover:cursor-pointer'
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${props.backdrop_path})` }}
                    key={props.index}

                >
                    <div className='text-white w-full text-center p-2 rounded-lg bg-gray-900/50'>
                        {props.title}
                    </div>
                </div>

            </div>
        </>
    )
}

export default MovieCard
