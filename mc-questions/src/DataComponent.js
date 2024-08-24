import React from 'react'

const DataComponent = (props) => {

    return (
        <div>
            <h1>Data loaded</h1>
            <p>{props.data}</p>
            <p>{props.company}</p>
        </div>
    )
}

export default DataComponent