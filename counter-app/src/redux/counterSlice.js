import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 100 },
    reducers: {
        increment(state) {
            state.value = state.value + 10
        },
        decrement(state) {
            state.value = state.value - 1
        },
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer