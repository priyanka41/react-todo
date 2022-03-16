import React, { FC, ChangeEvent, useState, useContext } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask"
import { ITask } from "./Interfaces";
import Complete from "./components/Complete";
import FailedTask from "./components/FailedTask";
import {  Routes, Route, Link } from 'react-router-dom'
import {TodoContext, TodoContextProvider} from './Context'
import { Todo } from "./Todo";

const Home = () => {
  return (<div>
<h1> HOME</h1>
      <Link to="/todo" > Go to todo</Link>
  </div>)
}
    
  function App()  {

  return (
      <>
      <div className="topBar">This is at the top always</div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="todo" element={<Todo />} >
            <Route path="completed" element={<Complete />} />
            <Route path="failed" element={<FailedTask />}/>
          </Route>
        </Route>
      </Routes>
  </>
  )
  }
export default App
