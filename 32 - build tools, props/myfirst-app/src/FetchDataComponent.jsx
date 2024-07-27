import React, {useState, useEffect} from 'react';

function FetchDataComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            console.log(response)
            const result = await response.json();
            console.log(result);
            setData(result)
        }

        fetchData()
    }, [])

    return <div>
        {data ? <p>data loaded</p> : <p>Loading....</p>}
    </div>

}

export default FetchDataComponent
