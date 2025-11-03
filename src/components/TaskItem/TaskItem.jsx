import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../../redux/task/thunk";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(task));
  };

  return (
      <li>
        <p
            style={ {
              textDecoration: task.isDone ? "line-through" : "none",
            } }
        >
          { task.text }
        </p>
        <input type="checkbox" onChange={ handleToggle } checked={task.isDone} />
        <button onClick={ handleRemove }>Remove</button>
      </li>
  );
};

export default TaskItem;
