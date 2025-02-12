import { useState } from 'react'
import { TodoWrapper } from './components/TodoWrapper'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <TodoWrapper />
    </>
  )
}

export default App
