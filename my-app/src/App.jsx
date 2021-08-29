import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from "./todosData";

import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todoCollection = this.state.todos.map(todo => {
            return <TodoItem
                        key = {todo.id}
                        text = {todo.text}
                        completed = {todo.completed} 
                    />
        }) 
    
        return (
            <div>
                <div className="container__header">
                    <h1>To-Do App</h1>
                </div>
                <div className="container">
                    {todoCollection}
                </div>
            </div>
        )
    }
}

export default App;