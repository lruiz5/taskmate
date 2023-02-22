import "./TaskList.css";

export const ShowTask = ({ task, setTask, tasklist, setTasklist }) => {
  const handleEdit = (id) => {
    const selectedTask = tasklist.find((task) => task.id === id);
    setTask(selectedTask);
  };
  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter((task) => task.id !== id);
    setTasklist(updatedTasklist);
    setTask({});
  };
  const clearAll = () => {
    setTasklist([]);
    setTask({});
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">ToDo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={clearAll}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              onClick={() => handleEdit(task.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(task.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
