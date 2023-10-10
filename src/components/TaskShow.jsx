import React, { useState } from 'react'
import { TaskCreate } from './TaskCreate'

export const TaskShow = ({task, onDelete, onUpdate}) => {
    const [showEdit, setShowEdit] = useState(false)
    
    const handleDeleteClick = () => {
        onDelete(task.id)
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }
    const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
        setShowEdit(false)
        onUpdate(id,updatedTitle,updatedTaskDesc)
    }
    return (
        <div className='task-show'>
           {showEdit ? (
                <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
            ) : 
            (<div>
                <h3>Göreviniz</h3>
                <p>{task.title}</p>
                <h3>Yapılacaklar</h3>
                <p>{task.taskDesc}</p>
                <div>
                    <button className='task-delete' onClick={handleDeleteClick}>Sil</button>
                    <button className='task-edit' onClick={handleEditClick}>Güncelle</button>
                </div>
            </div>)}
        </div>
    )
}
