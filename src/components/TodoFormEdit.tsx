import React, { useState } from 'react';

export const TodoFormEdit = ({ editTask, task }) => {
    const [inputValue, setInputValue] = useState(task.task); // Initialize with current task

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(inputValue, task.id);
        setInputValue('');
    };

    return (
        <form className='Todo-form' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' placeholder='Update Task' value={inputValue} onChange={handleChange} />
            <button type='submit' className='todo-btn'>Update</button>
        </form>
    );
};
