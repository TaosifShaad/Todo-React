import React, { useState } from 'react'

export const TodoForm = () => {
  const [inputValue, setValue] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    setValue(e.target[0].value);
    console.log(inputValue);
  }
  return (
    <form className='Todo-form' onSubmit={handleChange}> 
            <input type="text" className='todo-input' placeholder='Input Task'/>
            <button type='submit' className='todo-btn'>Submit</button>
            <h1>{inputValue}</h1>
    </form>
  )
}
