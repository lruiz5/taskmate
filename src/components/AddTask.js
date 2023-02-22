import "./AddTask.css";

export const AddTask = ({ task, setTask, tasklist, setTasklist }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTasklist = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleString()}`,
            }
          : todo
      );
      setTasklist(updatedTasklist);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleString()}`,
        completed: false,
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskname"
          id="task"
          placeholder="Add Task"
          autoComplete="off"
          maxLength={25}
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />

        <button
          disabled={!task.name || task.name.length === 0}
          type="submit"
          className={!task.name || (task.name.length === 0 && "disabled")}
        >
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};
