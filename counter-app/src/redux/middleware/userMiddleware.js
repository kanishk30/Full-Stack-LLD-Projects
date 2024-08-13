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



import { userLoading, userData, userError } from '../userSlice';



export const fetchUserMiddlewareDetail = (param) => {
    return async (dispatch) => {
        console.log('dispatch: ', dispatch)
        console.log('param: ', param)
        try {
            dispatch(userLoading())
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const user = await resp.json();
            console.log(user, 'user data');
            dispatch(userData(user))

        } catch (error) {
            dispatch(userError())
        }
    }
}