import AppName from './Components/AppName'
import AddToDo from './Components/AddToDo'
import './App.css'
// import ToDoItem from './Components/ToDoItem'
import ToDoItems from './Components/ToDoItems'
// import { useState } from 'react'
import Welcomemessage from './Components/Welcomemessage'
import TodoItemsContextProvider from './store/TodoItemsContextProvider.jsx'


function App() {

  return (
    <TodoItemsContextProvider>
      <center className='todo-container'>
        <AppName />
        <AddToDo />
        <Welcomemessage />
        <ToDoItems />
      </center>
    </TodoItemsContextProvider>
  )

}

export default App
