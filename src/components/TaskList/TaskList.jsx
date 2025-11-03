import TaskItem from "../TaskItem/TaskItem";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../redux/task/thunk";
import { filterTasks } from "../../redux/filterSlice";

const TaskList = () => {
  const dispatch = useDispatch();

  const { items, loading } = useSelector((state) => state.tasks);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  const onInput = (e) => {
    const keyword = e.currentTarget.value;
    dispatch(filterTasks(keyword));
  };

  return (
      <>
        <input type="text" placeholder="Enter a keyword" onInput={ onInput }/>

        <ul>
          { items.map((t) => {
            if (t.text.includes(filter)) {
              return <TaskItem key={ t.id } task={ t }/>;
            }

            return null;
          }) }
        </ul>
      </>
  );
};

export default TaskList;
