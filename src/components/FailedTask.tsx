import React, {useContext} from 'react'
import { TodoContext } from '../Context'
import { ITask } from '../Interfaces'


const FailedTask = () => {
  const {failedList} = useContext(TodoContext )

  return (
    <div className="todoList">
    <p>Failed Tasks</p>
    <ul>
    {failedList.map((task: ITask, key: number) => {
     return <li>{task.taskName}</li>
   })}
    </ul>
   
 </div>
  )
}

export default FailedTask
