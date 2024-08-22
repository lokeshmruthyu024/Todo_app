import React, { useContext } from 'react'
import Styles from './Welcomemessage.module.css'
import { TodoItemContext } from '../store/TodoItemsContextProvider.jsx';

const Welcomemessage = () => {
  const contextObj = useContext(TodoItemContext);
  const todoitems = contextObj.todoitems;
  return (
    todoitems.length === 0 && <p className={Styles.welcome}> Enjoy Your Day</p>

  )
}

export default Welcomemessage
