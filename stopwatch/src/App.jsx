import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000);

    }

    return () => clearInterval(interval)

  }, [running])

  const startHandler = () => {
    setRunning(true)
  }

  const stopHandler = () => {
    setRunning(false)
  }

  const resetHandler = () => {
    setRunning(false)
    setSeconds(0);
  }

  const hours = Math.floor(seconds / 3600)
  const min = Math.floor((seconds % 3600) / 60)
  const sec = seconds % 60

  return (
    <>
      <div>Time : {hours} : {min} : {sec}</div>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  )
}

export default App
