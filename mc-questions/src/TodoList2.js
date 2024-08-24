
import React, { useState, useEffect } from 'react';

function TodoList2(props) {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        console.log('[[Component Did Mount]] , fetching todos');

        setTimeout(() => {
            setTodos(['Learn React', 'Exercise', 'Practice problems'])
        }, 1000)

        return () => {
            console.log('[[componentWillUnmount]], Cancelling event listeners, timers, cleanup.')

        }
    }, [])

    useEffect(() => {
        console.log('Todos updated')
        console.log('[[ComponentDidUpdate]]')
    }, [todos])




    // handleInputChange = (ev) => {
    //     console.log(this)
    //     this.setState({ newTodo: ev.target.value })

    // }
    const handleInputChange = (ev) => {
        setNewTodo(ev.target.value)


    }

    const handleAddTodo = () => {
        setTodos(prevTodos => [...prevTodos, newTodo])


    }
    console.log('[[Render() called]');
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
            <input type='text' value={newTodo} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add todo</button>
        </div>
    )


}

export default TodoList2;