// to create a slice -> redux;
import { createSlice } from "@reduxjs/toolkit";
const PaginationSlice = createSlice({
    name: "paginationSlice",
    // intinal state value
    initialState: {
        pageNo: 1,
    },
    // functions to update your state 
    reducers: {
        handleNext: (state) => {
            state.pageNo = state.pageNo + 1
        },
        // go back handler
        handlePrevious: (state) => {
            if (state.pageNo == 1) {
                return;
            }
            state.pageNo = state.pageNo - 1
        }
    }
});
export default PaginationSlice;