import React from 'react'
function Pagination({ nextPageFn, previosuPageFn, pageNo }) {
    return (
        <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center'>
            <div onClick={previosuPageFn} className='px-8'><i className="fa-solid fa-arrow-left"></i></div>
            <div>{pageNo}</div>
            <div onClick={nextPageFn} className='px-8'><i className="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}
export default Pagination;