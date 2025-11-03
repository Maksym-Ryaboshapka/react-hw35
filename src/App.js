import { useDispatch } from "react-redux";
import { addTodo } from "./redux/task/thunk";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  const dispatch = useDispatch();
  
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const taskText = form.elements.task.value;

    dispatch(addTodo(taskText));

    form.reset();
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <h1>Task List</h1>
        <input type="text" name="task" />
        <button type="submit">Add</button>
      </form>

      <TaskList />
    </div>
  );
};

export default App;
