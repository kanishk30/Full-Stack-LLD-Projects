import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { user: null, error: false, loading: true, param: 1 },
    reducers: {
        // FUNCTIONS - TO UPDATE YOUR STATE.
        //    3 things
        // loading
        // error
        // success ( set user data)
        userLoading: state => {
            state.loading = true;
            state.error = false;
        },
        userError: state => {
            state.error = true;
            state.loading = false;
        },
        userData: (state, action) => {
            state.user = action.payload;
            state.loading = false
            state.error = false
        },

    }
})


export const { userLoading, userError, userData } = userSlice.actions;
export default userSlice.reducer