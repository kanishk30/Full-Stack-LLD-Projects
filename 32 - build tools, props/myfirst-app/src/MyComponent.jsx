import React from 'react';

const MyComponent = ({message, user}) => {
    
    return <h1>{message} from {user.name}</h1>
}

export default MyComponent;