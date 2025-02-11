import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Todo.css'

export const Todo = ({tasks}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
    tasks.completed = !tasks.completed;
  }

  return (
    <div className='todo'>
        <input type='checkbox' checked={isChecked} onChange={handleCheckbox} />
        <p className={tasks.completed? 'completed': ''}>{tasks.task}</p>
        <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
    </div>
  )
}
