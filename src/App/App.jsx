/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import AppUI from "./AppUI";

const defautlTodos = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: true,
  },
  { text: "Hacer ejercicio", completed: true },
  { text: "Leer un libro", completed: true },
  { text: "Desayunar", completed: false },
  { text: "Salir a caminar", completed: false },
  { text: "Hacer tareas", completed: false },
  { text: "Estudiar", completed: false },
  { text: "Dormir", completed: false },
];

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_v1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice([todoIndex], 1);
    saveTodos(newTodos);
  };

  const addTodo = (newTodo) => {
    saveTodos([...todos, newTodo]);
  };

  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <AppUI
      addTodo={addTodo}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      showModal={showModal}
      openModal={openModal}
    />
  );
}

export default App;
