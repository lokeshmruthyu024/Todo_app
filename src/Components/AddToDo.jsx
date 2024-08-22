import React, { useContext, useRef, useState } from 'react';
import { BiMessageAdd } from 'react-icons/bi';

import Styles from './ToDoItem.module.css'
import { TodoItemContext } from '../store/TodoItemsContextProvider.jsx';
const AddToDo = () => {

  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setduedate] = useState("");

  // const noOfUpdates = useRef(0);

  const todoNameelement = useRef();
  const dueDateelement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // }

  // const handleDateChange = (event) => {
  //   setduedate(event.target.value);
  //   console.log(`no of Updates :${noOfUpdates.current}`);
  // }
  const contextObj = useContext(TodoItemContext);
  const onNewItem = contextObj.AddnewItem;


  const AddItem = (event) => {
    event.preventDefault();
    const todoName = todoNameelement.current.value;
    const dueDate = dueDateelement.current.value;
    todoNameelement.current.value = "";
    dueDateelement.current.value = "";
    onNewItem(todoName, dueDate);
    // setTodoName("");
    // setduedate("");

  }

  return (
    <div className='container text-center'>
      <form className={`${Styles['kg-row']} row`}
        onSubmit={AddItem}
      >
        <div className='col-6'>
          <input type="text"
            ref={todoNameelement}
            placeholder='Enter Todo Here'
          // onChange={handleNameChange}
          // value={todoName}
          />
        </div>
        <div className='col-4'>
          <input type="date"
            ref={dueDateelement}
          // onChange={handleDateChange}
          // value={dueDate}
          />
        </div>
        <div className='col-2'>
          <button type='submit'
            className={`${Styles['kg-button']} btn btn-success `}><BiMessageAdd /></button>
        </div>
      </form>
    </div >
  )
}

export default AddToDo
