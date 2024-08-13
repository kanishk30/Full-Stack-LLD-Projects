import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setValue, addTodo } from '../redux/todoSlice';

const TodoRedux = () => {

    const dispatch = useDispatch();

    const { value, todoList } = useSelector((state) => state.todo)

    function handleChange(ev) {
        // ev.target.value
        // setValue(ev.target.value)
        dispatch(setValue(ev.target.value))
    }

    function handleAdd() {
        dispatch(addTodo(value))
    }

    return (
        <div>
            <h2>Todo list:</h2>
            <div style={{ display: 'flex' }}>
                <input type='text' placeholder='Add todos' onChange={handleChange} value={value} />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                <ul>
                    {todoList.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default TodoRedux
