import React from 'react';

const Todos = ({todos, deleteTodo}) => {  // this would get the prop inside the Todos tag

    const todoList = todos.length ? (// if todos.length is true => means if has length
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left</p>
    )    
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos