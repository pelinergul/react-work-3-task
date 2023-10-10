import React from 'react';
import { useState } from 'react';

export const TaskCreate = ({onCreate,task,taskFormUpdate,onUpdate}) => {
    const [title, settitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    // console.log(title,taskDesc)
    const handleChange = (e) => {
        settitle(e.target.value);
    }
    const handleTaskChange = (e) => {
        setTaskDesc(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskFormUpdate) {
            onUpdate(task.id,title,taskDesc)
        }
        else(
            onCreate(title,taskDesc)
        )
        settitle('');
        setTaskDesc('');
    }
  return (
    <div> {taskFormUpdate ? 
        <div className='task-update'>
            <h3>Lütfen Taskı Düzenleyiniz.</h3>
            <form className='task-form'>
                <label className='task-label'>Başlığı Düzenleyiniz</label>
                <input 
                value={title} 
                onChange={handleChange} 
                className='task-input' />
                <label className='task-label'>Taskı Düzenleyiniz</label>
                <textarea 
                value={taskDesc} 
                onChange={handleTaskChange} 
                rows={5} 
                className='task-input'/>
                <button 
                onClick={handleSubmit} 
                className='update-btn'>Güncelle</button>
            </form>
        </div> : 
        <div className='task-create'>
            <h3>Lütfen Task Ekleyiniz</h3>
            <form className='task-form'>
                <label className='task-label'>Başlık Giriniz</label>
                <input value={title} onChange={handleChange} className='task-input' />
                <label className='task-label'>Task Giriniz</label>
                <textarea value={taskDesc} onChange={handleTaskChange} rows={5} className='task-input'/>
                <button onClick={handleSubmit} className='task-btn'>Oluştur</button>
            </form>
        </div>}
    </div>
    
  )
}
