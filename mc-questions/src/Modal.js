import React from 'react'

function Modal(props) {
    const { isVisible, hide, show, toggle } = props;

    if (!isVisible) return null;

    return <div className='overlay'>
        <div className='modal'>
            <h2>Title</h2>
            <p>Description</p>
            <button onClick={hide}>Close</button>

        </div>

    </div>

}

export default Modal