import { useState } from "react";

const counter = () => {
const [countIncrease, setCount] = useState(0);

    const increaseCount = ()=>{
        setCount(countIncrease +1)  
    } 

  return (
    <>
    <div><span>{countIncrease}</span></div>
    
    <button type="button" onClick={increaseCount} className="border-2 rounded p-3 m-3">Inrease Count</button>

    
    </>
  )
}

export default counter