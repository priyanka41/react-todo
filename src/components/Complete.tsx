
import { useState, useContext } from 'react'
import { TodoContext } from '../Context'
import { ITask } from '../Interfaces'


interface Props {
    task: ITask;
    
}
const Complete = () => {
   
  const {completedList} = useContext(TodoContext )

return (
  <div className="todoList">
  <p>Completed Tasks</p>
  <ul>
  {completedList.map((task: ITask, key: number) => {
       return <li>{task.taskName}</li>
     })}
  </ul>
     
   </div>
  )
}

export default Complete
