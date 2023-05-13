/* eslint-disable react/prop-types */
import Input from "../styled-Components/input";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Input
        value={searchValue}
        onChange={onSearch}
        placeholder="Buscar tareas"
      ></Input>
    </>
  );
}

export default TodoSearch;
