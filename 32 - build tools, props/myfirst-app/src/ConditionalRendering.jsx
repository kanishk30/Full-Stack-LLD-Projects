import React from 'react'

const ConditionalRendering = ({isLoggedin, username}) => {

    // if isloggedin = true : hello {username}
    // else : hello guest

    return (
        <div>
            {isLoggedin ? 
                <h1>Hi {username}</h1> 
                : <h3>Hi guest. Please login.</h3>}
        </div>
    )

}

export default ConditionalRendering