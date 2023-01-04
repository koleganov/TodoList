import React from "react";

const todos = [
    {
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        title: 'Read next chapted of the book',
        isCompleted: false,
    },
    {
        title: 'Read next chapted of the book',
        isCompleted: true,
    },
]

const Home = () => {
    return ( 
        <div className="bg-gray-900 h-screen text-white">
            {todos.map(todo => <div>{todo.title} </div> )}
        </div>
    )
}

export default Home