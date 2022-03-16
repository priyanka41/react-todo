import React, { FC, ChangeEvent, useState, useContext } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask"
import { ITask } from "./Interfaces";
import Complete from "./components/Complete";
import FailedTask from "./components/FailedTask";
import {  Routes, Route, Link } from 'react-router-dom'
import {TodoContext, TodoContextProvider} from './Context'

    
  export const Todo = () =>  {
    const [task, setTask] = useState<string>("");
    const [time, setTime] = useState("");

    const {
      todoList,
     addTask,
     completeTask,
     failTask,
    } = useContext(TodoContext)

    const handleAdd = () => {
      addTask({taskName: task, time})
    }

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
          
           <input
            type="time"
            placeholder="enter time"
            name="time"
            value={time}
            onChange={e=>setTime(e.target.value)}
            required
          />


        </div>
        <button onClick={handleAdd}>Add Task</button>
      </div>
      <div className="todoList">
        <p>Tasks</p>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} failTask={failTask}/>;
        })}
      </div>
      <Link to="/todo/failed">Failed Tasks</Link>
      <Link to="/todo/completed">Completed Tasks</Link>

        {/* <Routes> */}
          {/* <Route path="/completed" element={<Complete />} />
          <Route path="/failed" element={<FailedTask />}/> */}
        {/* </Routes> */}


     
      </div>
      </>
    
  );
      }

