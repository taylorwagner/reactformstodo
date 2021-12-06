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

  // expect form to clear and todo to be on the page
  expect(todoList.getByLabelText("Task to Complete")).toHaveValue("");
  expect(todoList.getByText("clean bathroom")).toBeInTheDocument();
  expect(todoList.getByText("Edit")).toBeInTheDocument();
  expect(todoList.getByText("X")).toBeInTheDocument();
});

it("can edit a todo", function() {
  const todoList = render(<TodoList />);
  addTodo(todoList);

  fireEvent.click(todoList.getByText("Edit"));
  const editInput = todoList.getByDisplayValue("clean bathroom");
  fireEvent.change(editInput, { target: { value: "sleep" }});
  fireEvent.click(todoList.getByText("Update!"));

  // expect only edited todo to appear
  expect(todoList.getByText("sleep")).toBeInTheDocument();
  expect(todoList.queryByText("clean bathroom")).not.toBeInTheDocument();
});

it("can remove a todo", function() {
  const todoList = render(<TodoList />);
  addTodo(todoList);

  fireEvent.click(todoList.getByText("X"));

  // expect todo to be gone
  expect(todoList.queryByText("clean bathroom")).not.toBeInTheDocument();
});