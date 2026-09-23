import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrese = () => {
    setCount(count + 1)
  }

  const handleDecrese = () => {
    if (count == 0) return
    else {
      setCount(count - 1)
    }
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
      <div>the counter shows {count}</div>
      <button onClick={handleIncrese}>Increment</button>
      <button onClick={handleDecrese}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
