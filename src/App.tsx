import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
