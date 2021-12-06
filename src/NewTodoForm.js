import React, { useState } from "react";
import uuid from "uuid/v1";

const NewTodoForm = () => {
    const [task, setTask] = useState("");

    const handleChange = evt => {
        setTask(evt.target.value);
    };

    const gatherInput = evt => {
        evt.preventDefault();
        createTodo({ task, id: uuid() });
        setTask("");
    };

    return(
        <>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor={task}>Task to Complete</label>
                    <input
                        id="task"
                        type="text"
                        name="task"
                        value={task}
                        onChange={handleChange}
                    />
                </div>
                <button id="newTodoButton">Add Todo!</button>
            </form>
        </>
    )

}

export default NewTodoForm;