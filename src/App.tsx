import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask"
import { ITask } from "./Interfaces";

const App: FC = () => {
  
  const [task, setTask] = useState<string>("");
  const [time, setTime] = useState("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [completedList, setCompletedList] = useState<ITask[]>([])
  const [failedList, setFailedList] = useState<ITask[]>([])


  
  

  

  const addTask = (): void => {
    const newTask = { taskName: task, time  };
    setTodoList([...todoList, newTask]);
    setTask("");
    setTime("")};

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );

    setCompletedList([...completedList, ...todoList.filter((task) => {
      return task.taskName === taskNameToDelete;
    })])
  };

  const failTask  = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );

    setFailedList([...failedList, ...todoList.filter((task) => {
      return task.taskName === taskNameToDelete;
    })])
  };
  
  return (
    <>
    <h2>Todos List</h2>
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
           {/* <input
            type="date"
            placeholder="enter date"
            name="date"
            value={date}
            onChange={e=>setDate(e.target.value)}
            required
          /> */}
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
        <p>Tasks</p>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} failTask={failTask}/>;
        })}
      </div>
      <div className="todoList">
        <p>Completed Tasks</p>
        {completedList.map((task: ITask, key: number) => {
          return (
            <div>
              <p>{task.taskName}</p>
              </div>
          )
        })}
      </div>
      <div className="todoList">
        <p>Failed Tasks</p>
        {failedList.map((task: ITask, key: number) => {
          return (
            <div>
              <p>{task.taskName}</p>
              </div>
          )
        })}
      </div>
    </div>
   </>
  );
};

export default App;