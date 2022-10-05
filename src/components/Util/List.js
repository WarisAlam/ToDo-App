// import React, {useState} from 'react'
import React, {useEffect, useState} from 'react'
import ListItem from './ListItem'
import './List.css'

const local_Storage_key = 'react-app-waris-todos';

function List() {

// All todo 
  const [todos, setTodos] = useState([]);

// Array, object -> string (JSON.stringify)
// string -> array, object (JSON.parse)

useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(local_Storage_key));
  if (storedTodos) setTodos(storedTodos);
},[]);

  useEffect(() => {
    if(todos.length > 1)
    localStorage.setItem(local_Storage_key, JSON.stringify(todos));
  }, [todos]);

  // todo input
  const [todoInput, setTodInput] = useState('');

  //delete item in the List
  function deleteItem(id) {
    setTodos(todos.filter((todo) => todo.id !==id ))
  }

  const handleInput = (e) => {
    setTodInput(e.target.value);
  }
  const handleSumit = (e) => {
    if(todoInput === '') return;
    setTodos([
      {
      id: Math.random()*1000000,
      text: todoInput
    },
    ...todos 
    ]);
    setTodInput('');
  }

  return (
    <div className='List-container'>
          {/* TODO FORM */}
          <div className='todo-input-form'>
          <input type='text' placeholder='Add a todo' onChange={handleInput} value={todoInput}/>
          <button onClick={handleSumit}>Add Todo</button>
          </div>

      {/*dynamic rendering, data driven rendering*/}
      {
      todos.map(
         todo =>  <ListItem text={todo.text} id={todo.id} deleteItem={deleteItem} />
         )
         }
    </div>

  )
}

export default List