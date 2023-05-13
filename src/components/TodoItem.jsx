/* eslint-disable react/prop-types */
import { ReactComponent as CheckedSvg } from "../assets/checked.svg";
import { ReactComponent as DeleteSvg } from "../assets/delete.svg";
import styled from "styled-components";

const Item = styled.li`
  margin: 12px 0;
  padding: 0 12px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  background-color: #2d3047;

  .checked {
    cursor: pointer;
    path {
      fill: ${({ completed }) => (completed ? "green" : "#fff")};
    }
  }

  .task-description {
    margin: 24px 12px;
    width: calc(100% - 120px);
    font-size: 18px;
    text-align: start;
    line-height: 24px;
    font-weight: 400;
    text-decoration: ${({ completed }) => completed && "line-through"};
  }

  .delete {
    cursor: pointer;
    & path {
      fill: #ff0000;
    }
  }
`;

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <Item completed={completed}>
      <CheckedSvg
        className="checked"
        width="34"
        height="34"
        onClick={onComplete}
      />
      <p className="task-description">{text}</p>
      <DeleteSvg className="delete" width="34" height="34" onClick={onDelete} />
    </Item>
  );
}

export default TodoItem;
