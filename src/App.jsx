import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" flex items-center justify-center">
        <h1 className="text-4xl font-bold underline text-center text-purple-500 pt-28">
          Hello world React Js!
        </h1>
      </div>
    </>
  )
}

export default App
