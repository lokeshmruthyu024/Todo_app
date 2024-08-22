import React, { useContext } from 'react'
import Styles from './ToDoItem.module.css'
import { AiFillDelete } from "react-icons/ai";
import { TodoItemContext } from '../store/TodoItemsContextProvider.jsx';

const ToDoItem = ({ todotask, tododate }) => {
  const contextObj = useContext(TodoItemContext);

  const ondeleteClick = contextObj.DeletenewItem;


  return (
    <div className="container">
      <div className={`${Styles['kg-row']} row`}>
        <div className='col-6'>{todotask}</div>
        <div className='col-4'>{tododate}</div>

        <div className='col-2'>

          <button className={`${Styles['kg-button']} btn btn-danger`}
            onClick={() => { ondeleteClick(todotask) }} >

            <AiFillDelete />
          </button>
          
        </div>
      </div>
    </div >
  )
}

export default ToDoItem
