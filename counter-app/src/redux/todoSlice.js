import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: { value: '', todoList: ['Exercise', 'Study for 1 hour'] },
    reducers: {
        setValue(state, action) {
            // state.value >> CHANGE THIS
            // action.payload >> USER TYPED.
            state.value = action.payload;
            console.log(action, 'ACTION');

        },
        addTodo(state) {
            state.todoList.push(state.value)
        }
    }
})


export const { setValue, addTodo } = todoSlice.actions;
export default todoSlice.reducer