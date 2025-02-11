import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Todo.css'

export const Todo = ({tasks}) => {
  return (
    <div className='todo'>
        <p>{tasks.task}</p>
        <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
        </div>
    </div>
  )
}
