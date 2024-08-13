import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counterSlice';
import todoReducer from './todoSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        user: userReducer
    }
})


export default store;