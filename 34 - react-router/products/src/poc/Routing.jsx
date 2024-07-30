import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';

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

// fetch(https://fakestoreapi.com/users/5)

function Users(props) {
    // console.log(props);
    let {userId } = useParams();
    
    let [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function apiCall() {
            setIsLoading(true)
            const resp = await fetch(`https://fakestoreapi.com/users/${userId}`);
            const data = await resp.json();
            console.log(data) ;
            setUser(data); // user will have api response.
            setIsLoading(false)
        }

        apiCall()
    }, [])

    return <>
    {/* {isLoading && user === null ? <h3>Loading....</h3> : null}
    {!isLoading && user ? <>
            <h4>User First name: {user?.name?.firstname}</h4>
            <h4>User Last name: {user?.name?.lastname}</h4>
            <h4>User email: {user.email}</h4>
      </> : null}
    {!isLoading && user === null ? <h5>No data found</h5> : null} */}

    {/* nested ternary below. - BAD approach */}

    {
        isLoading ? <h3>Loading...</h3> :
            user 
                ? (<>
                <h4>User First name: {user?.name?.firstname}</h4>
                <h4>User Last name: {user?.name?.lastname}</h4>
                <h4>User email: {user.email}</h4>
            </>) 
                : <h5>No data found</h5> 
    }
      
    
    </>


    return <h2>I am user with user id = {userId}</h2>
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
                    <li><Link to={'/users/1'}>
                            Users
                        </Link>    
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/*' element={<PageNotFound></PageNotFound>} />
                <Route path='/about/*' element={<About></About>} />
                <Route path='/' element={<Home></Home>} />
                <Route path='/product' element={<Product></Product>} />
                <Route path='/users/:userId' element={<Users isAdmin={true}></Users>} />
            </Routes>
        </>
    )
}


export default Routing;


// if(a ==b) {
//     return true
// } else {
//     return false;
// }

// return a==b ? true : false