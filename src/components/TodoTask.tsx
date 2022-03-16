import React, {useEffect, useState} from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask:(_: string) => void;
  failTask: (_: string) => void
}

const TodoTask = ({ task, completeTask, failTask }: Props) => {

  const [displayTimer, setDisplayTimer] = useState("")

  useEffect(() => {
  timer()
    
  },[])

  const timer = () => {
    const interval = setInterval( () => {
      const currentTIme = new Date()
      const currentSecond = currentTIme.getSeconds()
      const currentMinute = currentTIme.getMinutes()
      const currentHour = currentTIme.getHours()
      console.log('checking current hours and minutes',currentMinute, currentHour, currentSecond )
      
      const [hour1, minute1] = task.time.split(":")
      const seconds = 60
      const hour = parseInt(hour1)
      const minutes = parseInt(minute1) - 1
      console.log('checking hours and minutes',hour, minutes )

      const diffHour = hour - currentHour
      let diffMinutes = minutes - currentMinute
      let diffSeconds = seconds - currentSecond

      if ( diffHour === 0 &&  diffMinutes === -1 && diffSeconds === 60) {
        clearInterval(interval)
        diffMinutes = 0
        diffSeconds = 0
        failTask(task.taskName)
      }

      setDisplayTimer(`${diffHour} : ${diffMinutes} : ${diffSeconds}`)

    },1000)
  }

  console.log('checking date and time', task)

  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.time}</span>
        <span>{displayTimer}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        done
      </button>
  
    </div>

    
  );
};

export default TodoTask;