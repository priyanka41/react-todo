import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask"
import { ITask } from "./Interfaces";

const App: FC = () => {
  
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [date,setDate]=useState("");
  const [time, setTime] = useState("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const todayDate=new Date();
  const todayTime=todayDate.toLocaleTimeString();

  console.log(todayTime);

  // const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   if (event.target.name === "task") {
  //     setTask(event.target.value);
  //   } else {
  //     setDeadline(Number(event.target.value));
  //   }
  // };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline,date:date,time:time };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
    setDate(""),
    setTime("")
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };
  
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={e=>setTask(e.target.value)}
          />
          {/* <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={e=>setDeadline(e.target.value)}
          /> */}
           <input
            type="date"
            placeholder="enter date"
            name="date"
            value={date}
            onChange={e=>setDate(e.target.value)}
            required
          />
           <input
            type="time"
            placeholder="enter time"
            name="time"
            value={time}
            onChange={e=>setTime(e.target.value)}
            required
          />


        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;