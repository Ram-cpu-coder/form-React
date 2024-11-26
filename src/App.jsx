import { useState } from 'react'
import './App.css'
import LoginForm from './LoginForm'

const apiResponse = {
  name: "Ram Coder",
  age: 30,
  gender: "Male"
}


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <LoginForm apiResponse={{name: apiResponse.name, age: apiResponse.age}}/>
    </div>
    
    </>
  )
}

export default App
