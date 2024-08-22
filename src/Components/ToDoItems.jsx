import React, { useContext } from 'react'
import ToDoItem from './ToDoItem';
import Styles from './ToDoItems.module.css';

import { TodoItemContext } from '../store/TodoItemsContextProvider.jsx';

const ToDoItems = () => {

  const contextObj = useContext(TodoItemContext);
  const TaskTodo = contextObj.todoitems;


  const ondeleteClick = contextObj.DeletenewItem;

  // console.log(TaskTodo);
  return (
    <div>
      <div className={`${Styles['items-container']}`}>
        {TaskTodo.map(item =>
          <ToDoItem
            key={item.task}
            todotask={item.task}
            tododate={item.date}
          />
        )}
      </div>
    </div>
  )
}

export default ToDoItems
