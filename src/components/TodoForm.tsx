import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue)
  }
  return (
    <form className='Todo-form' onSubmit={handleSubmit}> 
            <input type="text" className='todo-input' placeholder='Input Task' value={inputValue} onChange={handleChange} />
            <button type='submit' className='todo-btn'>Submit</button>
    </form>
  )
}
