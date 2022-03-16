
import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask"
import { ITask } from "./Interfaces";
import Complete from "./components/Complete";
import FailedTask from "./components/FailedTask";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export const TodoContext = React.createContext<any>({});

export const TodoContextProvider = ({ children }: any) => {

  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [completedList, setCompletedList] = useState<ITask[]>([])
  const [failedList, setFailedList] = useState<ITask[]>([])

  const addTask = ({taskName, time}: any) => {
    const newTask = { taskName, time  };
    setTodoList([...todoList, newTask]);
  }

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
  
  }

  return (
   <TodoContext.Provider
   value={{
     todoList,
     completedList,
     failedList,
     addTask,
     completeTask,
     failTask,
   }}
   >
   {children}
 </TodoContext.Provider>
  );
}