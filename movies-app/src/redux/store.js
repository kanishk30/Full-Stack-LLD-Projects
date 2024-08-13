import { configureStore } from '@reduxjs/toolkit';
import PaginationSlice from './paginationSlice';
// adding async middlewares
const store = configureStore({
    reducer: {
        PaginationSlice: PaginationSlice.reducer
    }
})
export default store;