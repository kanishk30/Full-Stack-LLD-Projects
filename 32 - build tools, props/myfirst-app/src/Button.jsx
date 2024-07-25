import React from 'react'



const Button = (props) => {

    // function handleClick() {
    //     console.log('I m clicked.')
    // }
    const handleClick = () => {
        console.log(props.text)
    }
   

    return <button onClick={handleClick}>Click me and check console.</button>
}

export default Button