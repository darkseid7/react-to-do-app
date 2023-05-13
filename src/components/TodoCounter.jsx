/* eslint-disable react/prop-types */
import Title from "../styled-Components/Title";

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <>
      <Title>
        {totalTodos === 0
          ? "No hay tareas el día de hoy"
          : `Has completado ${completedTodos} de ${totalTodos} tareas`}
      </Title>
    </>
  );
}

export default TodoCounter;
