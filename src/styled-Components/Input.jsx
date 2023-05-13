import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 60px;
  margin: 1rem 0;
  font-size: 24px;
  color: #1e1e1f;
  background: #f9fbfc;
  border-radius: 12px;
  text-align: center;
  font-weight: 400;

  &::placeholder {
    color: #a5a5a5;
    font-weight: 400;
  }

  &:focus {
    outline-color: #61dafa;
  }
`;

export default Input;
