import TodoItem from "./TodoItem.jsx";
import AddTodo from "./AddTodo.jsx";
import { useTodoContext } from "../store/TodoContext";

const TodoList = () => {
  const { state } = useTodoContext();
  return (
    <>
      <AddTodo />
      {state.map(
        (t, index) => (
          <TodoItem key={index} todo={t} />
        )
      )}
    </>
  );
};

export default TodoList;
