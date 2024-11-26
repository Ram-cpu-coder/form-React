import { useState } from "react"

const SubCounter = () => {
    const [countDecrease, setCount] = useState(100);
const decreaseCount= ()=>{
    setCount(countDecrease - 1)
}
  return (
    <>
    <div><span></span></div>
    <hr />

    <div><span>{countDecrease}</span></div>
    <button type="button" onClick={decreaseCount} className="border-2 rounded p-3 m-3">Decrease Count</button>
    </>
  )
}

export default SubCounter