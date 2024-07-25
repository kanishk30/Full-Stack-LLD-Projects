import React from 'react'

const DisplayData = ({fruits, person}) => {
    // const {fruits, person} = props;
    console.log(fruits, person)

    return (
    <React.Fragment>
        <div>
            <h2>Fruits list:</h2>
            <ul>
                {/* render each fruit from fruits array */}
                {fruits.map((fruit, index) => {
                    return <li key={index}>{fruit}</li>
                })}
            </ul>
        </div>
        <div>
            <h2>Person info:</h2>
            <p>Name: {person.name}</p>
            <p>Profile: {person.profile}</p>
        </div>
    </React.Fragment>
    )
}

export default DisplayData