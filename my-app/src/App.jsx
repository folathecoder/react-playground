import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from "./todosData";

import './App.css'

function App() {

    const todoCollection = todosData.map() 

    return (
        <div>
            <div className="container__header">
                <h1>To-Do App</h1>
            </div>
            <div className="container">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}

export default App;