import React from "react";

const Todo = ({ task }) => {
    return (
        <div>
            { task }
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo;