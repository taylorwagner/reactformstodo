import React, { useState } from "react";
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const [todos, setNewTodos] = useState([]);
    const add = todoObj => {
        setNewTodos(todos => [...todos, todoObj]);
    };
    const remove = id => {
        setNewTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const todoComp = todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            handleRemove={remove}
        />
    ));

    return (
        <>
            <NewTodoForm createTodo={add} />
            {todoComp}
        </>
    );
}

export default TodoList;