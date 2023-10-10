import React from 'react'
import { TaskShow } from './TaskShow'

export const TaskList = ({tasks, onDelete, onUpdate }) => {
    
  return (
    <div className='task-list'>
        {tasks.map((task)=> {
            return(
                <TaskShow 
                    onDelete={onDelete} 
                    key={task.id} 
                    task={task} 
                    onUpdate={onUpdate}
                />
            )
        })}
    </div>
  )
}
