import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import {v4 as uuidv4} from 'uuid';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const toggleEdit = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isEditing: !todo.isEditing };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const editTask = (updatedTask, id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id && todo.isEditing) {
                return { ...todo, task: updatedTask, isEditing: false };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    return (
        <div className='Todo-Wrapper'>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, i) => (
                <Todo task={todo} key={i} deleteTodo={deleteTodo} editTask={editTask} toggleEdit={toggleEdit}/>
            ))}
        </div>
    )
}
