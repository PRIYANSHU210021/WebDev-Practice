import React, { useState } from 'react'
import Todoinput from './components/Todoinput'
import TodoList from './components/TodoList';
const App = () => {
  const [listTodo, setListTodo] = useState([]);
  const addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  } 

  return (
    <div className='main-container'>
      <div className="cente-container">
        <Todoinput addList={addList}></Todoinput>
        <h1 className='app-heading'>TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList key={i} index={i} deleteItem={deleteListItem} item={listItem}></TodoList>
          )
        })}
      </div>
      {/* {console.log(listTodo)} */}
    </div>
  )
}

export default App
