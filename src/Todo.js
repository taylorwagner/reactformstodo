import React from "react";

const Todo = ({ id, task }) => {
    const remove = () => handleRemove(id);
    return (
        <div>
            { task }
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo;