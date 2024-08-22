import React, { createContext, useReducer } from 'react'


export const TodoItemContext = createContext([]);


const todoItmesReducer = (currTodoItems, action) => {

  let newTodoItems = currTodoItems;
  if (action.type === 'NEW_ITEM') {
    newTodoItems = [
      ...currTodoItems, {
        task: action.payload.itemName, date: action.payload.itemDueDate
      },
    ];
  }
  else if (action.type === 'DELETE_ITEM') {
    newTodoItems = currTodoItems.filter(item => item.task !== action.payload.itemName);
  }
  return newTodoItems;
}


const defaultTodoItems = []




const TodoItemsContextProvider = ({ children }) => {
  // const [todoitems, setTodoItem] = useState([]); commented out bcause to learn useReducer hook

  const [todoitems, dispatchTodoItems] = useReducer(todoItmesReducer, defaultTodoItems);

  const AddnewItem = (itemName, itemDueDate) => {

    const newItemAction =
    {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    };

    dispatchTodoItems(newItemAction);



    // console.log(`New Item added name: ${itemName}, Date: ${itemDueDate}`);

    //   setTodoItem((currVal) => {
    //     const newTodoItems = [
    //       ...currVal,
    //       { task: itemName, date: itemDueDate },
    //     ];
    //     return newTodoItems;
    //   });
    // };     // This belongs to useState

    // setTodoItem((currVal) => [
    //   ...currVal,
    //   { task: itemName, date: itemDueDate },
    // ])
    // This belongs to useState
  }

  const DeletenewItem = (todoItemName) => {

    const deleteItemAction = {
      type: 'DELETE_ITEM',
      payload: {
        itemName: todoItemName
      },
    };

    dispatchTodoItems(deleteItemAction);


  }



  return (
    <TodoItemContext.Provider value={
      // { todoitems: todoitems, AddnewItem: AddnewItem, DeletenewItem: DeletenewItem } destructing in the next line
      { todoitems, AddnewItem, DeletenewItem }
    }>

      {children}

    </TodoItemContext.Provider>
  )
}

export default TodoItemsContextProvider