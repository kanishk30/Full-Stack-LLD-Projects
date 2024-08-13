import React, { useState, useEffect } from 'react'
import { fetchUserMiddlewareDetail } from '../redux/middleware/userMiddleware'
import { useDispatch, useSelector } from 'react-redux'

const User = () => {
    // const [user, setUser] = useState(null)
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     async function apiCall() {
    //         try {
    //             setLoading(true);
    //             const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
    //             const data = await resp.json();
    //             console.log(data);
    //             setUser(data);
    //             // setLoading(false)
    //         } catch (error) {
    //             setError(true)
    //             // setLoading(false)
    //         }
    //         finally {
    //             setLoading(false)
    //         }
    //     }

    //     apiCall();
    // }, [])



    const { user, error, loading, param } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserMiddlewareDetail(param));
    }, [])


    if (loading) {
        return <h3>Loading... Please wait</h3>
    }

    if (error) {
        return <h3>Something went wrong.</h3>
    }

    return (
        <div>
            <h2>User</h2>
            <h4>Name: {user.name}</h4>
            <h4>Phone: {user.phone}</h4>
        </div>

    )
}

export default User
