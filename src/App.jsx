import { useState } from "react"
import Counter from './conter.jsx'
export const App = () => {
    const [fruit, setfruit] = useState("Apple");
    const fruitHndel = ()=>
    {
      setfruit("Banana")
    }
  return (
  
    <div>
      <h1>state</h1>
      <h1>{fruit}</h1>
      <button onClick={fruitHndel}>change fruit</button>
       <Counter/>
    </div>
  )
}


