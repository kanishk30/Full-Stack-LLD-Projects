import React from 'react'
import Logo from '../assets/imdb.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex space-x-8 items-center pl-3 py-2'>
            <Link to='/'>
                <img className='w-[50px]' src={Logo} />
            </Link>
            <Link to='/' className='text-blue-500 text-3xl font-bold'>
                Movies
            </Link>
            <Link to='/watchlist' className='text-blue-500 text-3xl font-bold'>
                Watchlist
            </Link>
        </div>

    )
}

export default Navbar
