/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "../styled-Components/input";
import Title from "../styled-Components/Title";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    background-color: #0d3b66;
    background-color: #30323d;

    padding: 20px;
    margin: 0 1rem;
    border-radius: 5px;

    h1 {
      padding: 1rem;
    }

    input {
      height: 50px;
    }
    .button-wrapper {
      display: flex;
      justify-content: space-between;
      button {
        cursor: pointer;
        margin: 1rem 0;
        padding: 1rem 2.5rem;
        background-color: #086788;

        color: #fff;
        border-radius: 12px;
        border: none;
        transition: all 0.5s ease;

        &:hover {
          background-color: #048ba8;
        }

        &.close-button {
          background-color: #f2af29;
          &:hover {
            background-color: #f18f01;
          }
        }
      }
    }

    @media (width <= 600px) {
      top: -60px;
    }
  }
`;
const TodoModal = ({ showModal, addTodo }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const addTask = () => {
    if (newTaskName != "") {
      const getSavedTodos = JSON.parse(localStorage.getItem("TODOS_v1"));
      const capitalizeString =
        newTaskName.charAt(0).toUpperCase() +
        newTaskName.slice(1).toLowerCase();
      const newTodo = { text: capitalizeString, completed: false };
      getSavedTodos.push(newTodo);
      addTodo(newTodo);
      localStorage.setItem("TODOS_v1", JSON.stringify(getSavedTodos));
      showModal();
    } else {
      alert("Debes ingresar un nombre para la tarea");
    }
  };

  const handleNewTaskName = (e) => {
    setNewTaskName(e.target.value);
  };

  return (
    <>
      <Modal>
        <div className="modal-content">
          <Title>Nombre de la tarea</Title>
          <Input type="text" id="taskName" onChange={handleNewTaskName} />
          <div className="button-wrapper">
            <button className="close-button" onClick={showModal}>
              Cerrar
            </button>
            <button onClick={addTask}>Agregar</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TodoModal;
