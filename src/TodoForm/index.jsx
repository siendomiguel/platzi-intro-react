import { useContext, useState } from "react";
import { TodoContext } from "../context/context";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState('');

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onWrite = (e) => {
    setNewTodoValue(e.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea
        value={newTodoValue}
        placeholder="Ejemplo: Comprar arroz"
        onChange={onWrite}
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-button TodoForm-button--add"
          type="submit"
          onClick={onCancel}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
