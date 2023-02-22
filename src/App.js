import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ShowTask } from "./components/ShowTask";
import { AddTask } from "./components/AddTask";
import "./App.css";

function App() {
  const [tasklist, setTasklist] = useState(
    localStorage.getItem("tasklist")
      ? JSON.parse(localStorage.getItem("tasklist"))
      : []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask
          task={task}
          setTask={setTask}
          tasklist={tasklist}
          setTasklist={setTasklist}
        />
        <ShowTask
          task={task}
          setTask={setTask}
          tasklist={tasklist}
          setTasklist={setTasklist}
        />
      </main>
    </div>
  );
}

export default App;
