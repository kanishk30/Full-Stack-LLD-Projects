import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';

function About() {
    return <h2>I am About page</h2>
}

function Home() {
    return <h2>I am Home page</h2>
}
function Product() {
    return <h2>I am Product page</h2>
}
function PageNotFound() {
    return <h2>404. Not found. Please check URL.</h2>
}

function Routing() {
    return (
        <>
            <h1>Routing example</h1>
            <nav>
                <ul>
                    <li>
                    <Link to={'/about'}>About</Link> 
                    </li>
                    <li>
                        <Link to={'/'}>
                            Home
                        </Link>    
                    </li>
                    <li><Link to={'/product'}>
                            Product
                        </Link>    
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/*' element={<PageNotFound></PageNotFound>} />
                <Route path='/about/*' element={<About></About>} />
                <Route path='/' element={<Home></Home>} />
                <Route path='/product' element={<Product></Product>} />
            </Routes>
        </>
    )
}


export default Routing;