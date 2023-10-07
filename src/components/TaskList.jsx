import React from 'react'
import { TaskShow } from './TaskShow'

export const TaskList = ({tasks}) => {
    
  return (
    <div className='task-list'>
        {tasks.map((task)=> {
            return(
                <TaskShow key={task.id} task={task} />
            )
        })}
    </div>
  )
}
