import { useState } from 'react'
import './App.css'
import { TaskCreate } from './components/TaskCreate'
import { TaskList } from './components/TaskList'


function App() {

  return (
    <>
      <TaskCreate /> 
      <h1>Görevler</h1>
      <TaskList />
    </>
  )
}

export default App
