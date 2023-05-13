import { useState } from "react";
import styled from "styled-components";

const AddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 16px;
  background-color: #086788;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 28px;
  line-height: 60px;
  transition: background-color 0.3s ease;
  z-index: 999;

  &:hover {
    background-color: #0062cc;
    cursor: pointer;
  }

  &:focus {
    background-color: #086788;
  }
`;

function CreateToDoButton({ showModal }) {
  return (
    <>
      <AddButton onClick={showModal}>+</AddButton>
    </>
  );
}

export default CreateToDoButton;
