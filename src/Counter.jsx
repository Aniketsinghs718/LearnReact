import { useState } from "react"

const Counter = () => {
    const [count,setcount]=useState(0);
  return (

    <div>
        <p>Count: {count} </p>
        <button onClick={()=>setcount(count+1)}>INCREASE</button>
        <button onClick={()=>setcount(0)}>RESET</button>
    </div>
    
  )
}

export default Counter