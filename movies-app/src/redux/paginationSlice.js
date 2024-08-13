import { createSlice } from '@reduxjs/toolkit';

const PaginationSlice = createSlice({
    name: 'paginationSlice',
    initialState: {
        pageNo: 1
    },
    reducers: {
        handleNext: state => {
            state.pageNo = state.pageNo + 1
        },
        handlePrev: state => {
            if (state.pageNo === 1) {
                return;
            }
            state.pageNo = state.pageNo - 1
        },
    }
})

export const { handleNext, handlePrev } = PaginationSlice.actions;
export default PaginationSlice.reducer;