import React from 'react'

const TodoList = (props) => {
  return (
    <li className='list-item'>
        {props.item}
        <span className='icons'>
        <i className="fa-regular fa-trash-can icon-delete" onClick={(e)=>{props.deleteItem(props.index)}}></i> 
        </span>
    </li>
)
}

export default TodoList
