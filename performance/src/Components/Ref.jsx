import React, { useRef } from 'react'

const Ref = () => {

    const inputRef = useRef(null); // inputRef is { current: null } ref object


    function handleFocusInput() {
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} type='text' />
            <button onClick={handleFocusInput}>Focus Input</button>
        </div>
    )
}

export default Ref
