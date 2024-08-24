/*
    - constructor
    - render() > JSX retrurn
    - cDM - componentDidMount === useEffect(() => {..}, [])
    - cDU - componentDidUpdate === useEffect(() => {..}, [depA, depB...])
    - CWU - componentWillUnmount === useEffect(() => { return () => {...CLEANUP..}}, [depA, depB...])
*/

/*
    SEQUENCE:
        - constructor
        - render
        - cDM
        - render
        - cDU
        - render
        - cWU (when about to be removed from DOM)
*/

import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)

        console.log('[[Constructor]] called...')
    }

    componentDidMount() {
        console.log('[[Component Did Mount]] , fetching todos');
        setTimeout(() => {
            this.setState({
                todos: ['Learn React', 'Exercise', 'Practice problems']
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('[[ComponentDidUpdate]]')
        if (prevState.todos !== this.state.todos) {
            // console.log('Prev todos:', prevState.todos,
            // 'Latest todos: ', this.state.todos);
            console.log('Todos updated')
        }
    }

    componentWillUnmount() {
        console.log('[[componentWillUnmount]], Cancelling event listeners, timers, cleanup.')
    }

    // handleInputChange = (ev) => {
    //     console.log(this)
    //     this.setState({ newTodo: ev.target.value })

    // }
    handleInputChange(ev) {
        console.log(this)
        this.setState({ newTodo: ev.target.value })

    }

    handleAddTodo = () => {
        this.setState((state) => ({
            todos: [...state.todos, state.newTodo]
        }))

    }

    render() {
        console.log('[[Render() called]');
        return (
            <div>
                <h2>Todo List</h2>
                <ul>
                    {this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
                </ul>
                <input type='text' value={this.state.newTodo} onChange={this.handleInputChange} />
                <button onClick={this.handleAddTodo}>Add todo</button>
            </div>
        )
    }
}

export default TodoList;