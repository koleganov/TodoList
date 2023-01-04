import React from "react";
import Todoitem from "./item/Todoitem";

const todos = [
    {
        _id: '1234',
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        _id: '1234555',
        title: 'Read next chapted of the book',
        isCompleted: false,
    },
    {
        _id: '12346666',
        title: 'Read next chapted of the book',
        isCompleted: true,
    },
]

const Home = () => {
    return ( 
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-5">My first TodoList</h1>
            {todos.map(todo => <Todoitem key={todo._id} todo={todo} /> )}
        </div>
    )
}

export default Home