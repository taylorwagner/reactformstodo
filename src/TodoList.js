import React, { useState } from "react";
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const [todos, setNewTodos] = useState([]);

    const add = todoObj => {
        setNewTodos(todos => [...todos, todoObj]);
    };

    const update = (id, updatedTask) => {
        setTodos(todos =>
          todos.map(todo =>
            todo.id === id ? { ...todo, task: updatedTask } : todo
          )
        );
      };

    const remove = id => {
        setNewTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const todoComp = todos.map(todo => (
        <Todo
            remove={remove}
            key={todo.id}
            id={todo.id}
            task={todo.task}
            update={update}
        />
    ));

    return (
        <>
            <NewTodoForm createTodo={add} />
            <ul>{todoComp}</ul>
        </>
    );
}

export default TodoList;