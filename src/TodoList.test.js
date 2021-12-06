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

it("can add a new todo", function() {
  const todoList = render(<TodoList />);

  //no todos yet
  expect(todoList.queryByText("X")).not.toBeInDocument();

  addTodo(todoList);

  //expect to see todo
  const removeButton = todoList.getByText("X");
  expect(removeButton).toBeInDocument();

  // expect form to be empty
  expect(todoList.getAllByDisplayValue(""));
});

it("can remove a todo", function() {
  const todoList = render(<TodoList />);
  addTodo(todoList);

  const removeButton = todoList.getByText("X");

  // click the remove button and todo should be gone
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInDocument();
});