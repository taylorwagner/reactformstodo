import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "clean bathroom") {
  const taskInput = todoList.getByLabelText("Task to Complete");
  fireEvent.change(taskInput, { target: { value: task }});
  const button = todoList.getByText("Add Todo!");
  fireEvent.click(button);
};

it("renders without crashing", function() {
    render(<TodoList />);
});
  
it("matches snapshot", function() {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

