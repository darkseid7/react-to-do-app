/* eslint-disable react/prop-types */
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateToDoButton from "../components/CreateTodoButton";
import TodoModal from "../components/TodoModal";
import styled from "styled-components";
import "./App.css";

const MainContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1rem 1rem 5rem 1rem;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
`;

const AppUI = ({
  addTodo,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  showModal,
  openModal,
}) => {
  return (
    <>
      <MainContainer>
        <h1>To Do Web page</h1>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {searchedTodos.map(({ text, completed }) => (
            <TodoItem
              key={text}
              text={text}
              completed={completed}
              onComplete={() => completeTodo(text)}
              onDelete={() => deleteTodo(text)}
            />
          ))}
        </TodoList>
        {openModal && <TodoModal addTodo={addTodo} showModal={showModal} />}
        <CreateToDoButton showModal={showModal} />
      </MainContainer>
    </>
  );
};

export default AppUI;
