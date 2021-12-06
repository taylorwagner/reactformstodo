import React, { useState } from "react";
import uuid from "uuid/v4";

const NewTodoForm = () => {
    const INITIAL_STATE = {
        task: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        newTask({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={task}>Task to Complete</label>
                    <input
                        id="task"
                        type="text"
                        name="task"
                        value={formData.task}
                        onChange={handleChange}
                    />
                </div>
                <button id="newTodoButton">Add Todo!</button>
            </form>
        </>
    )

}

export default NewTodoForm;