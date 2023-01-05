import React from "react";
import Todoitem from "./item/Todoitem";
import CreateTodoFiel from "./create-todo-field/CreateTodoFiel";
import {useState} from 'react'

const data = [
    {
        _id: '1234',
        title: 'Погладить кота',
        isCompleted: false,
    },
    {
        _id: '1234555',
        title: 'Купить подарок на день рождения Кати',
        isCompleted: false,
    },
    {
        _id: '12346666',
        title: 'Стать Frontend разработчиком',
        isCompleted: false,
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => setTodos([...todos].filter(t => t._id != id))
    
    return ( 
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-5">My first TodoList</h1>
            {todos.map(todo => (
                <Todoitem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} /> )
            )}
            <CreateTodoFiel setTodos={setTodos} />
        </div>
    )
}

export default Home