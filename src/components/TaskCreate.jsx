import React from 'react';
import { useState } from 'react';

export const TaskCreate = ({onCreate}) => {
    const [title, settitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    // console.log(title,taskDesc)
    const handleChange = (e) => {
        settitle(e.target.value);
    }
    const handleTaskChange = (e) => {
        setTaskDesc(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title,taskDesc);
        settitle('');
        setTaskDesc('');
    }
  return (
    <div className='task-create'>
        <h3>Lütfen Task Ekleyiniz</h3>
        <form className='task-form'>
            <label className='task-label'>Başlık Giriniz</label>
            <input value={title} onChange={handleChange} className='task-input' />
            <label className='task-label'>Task Giriniz</label>
            <textarea value={taskDesc} onChange={handleTaskChange} rows={5} className='task-input'/>
            <button onClick={handleSubmit} className='task-btn'>Oluştur</button>
        </form>
    </div>
  )
}
