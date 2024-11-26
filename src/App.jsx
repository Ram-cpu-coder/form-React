import { useState } from 'react'
import './App.css'
import LoginForm from './LoginForm'
import Counter from './counter'
import SubCounter from './subCounter'

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
    <div>
      <Counter/>
      <SubCounter/>
    </div>
    
    </>
  )
}

export default App
