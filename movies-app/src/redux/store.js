import { configureStore } from '@reduxjs/toolkit'

import paginationSliceReducer from './paginationSlice';

const store = configureStore({
    reducer: {
        pagination: paginationSliceReducer
    }
})


export default store;