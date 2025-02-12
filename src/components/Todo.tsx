import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Todo.css'
import { TodoFormEdit } from './TodoFormEdit';

export const Todo = ({task, deleteTodo, editTask, toggleEdit}) => {
  console.log('skdfjsdlkfjs')
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
    task.completed = !task.completed;
  }

  return (
    <div className='todo'>
        <input type='checkbox' checked={isChecked} onChange={handleCheckbox} />
        {task.isEditing? (<TodoFormEdit editTask={editTask} task={task} />) 
        : (<p className={task.completed? 'completed': ''}>{task.task}</p>)}
        <div>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => toggleEdit(task.id)}/>
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
