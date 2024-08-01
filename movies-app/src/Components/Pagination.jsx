import React from 'react'

const Pagination = ({ handleNext, handlePrev, pageNo }) => {
    return (
        <div className='bg-gray-300 p-4 flex justify-center gap-2 w-full mt-6'>
            <div onClick={handlePrev} className='px-6'>
                <i class='fa-solid fa-arrow-left'></i>
            </div>
            <div>{pageNo}</div>
            <div onClick={handleNext} className='px-6'>
                <i class='fa-solid fa-arrow-right'></i>
            </div>
        </div>
    )
}

export default Pagination
