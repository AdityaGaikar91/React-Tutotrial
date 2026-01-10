import React, { useContext, useState } from 'react'
import { CountContext } from './Contex'

function Sam() {
    const[count, setCount] = useState(0)
  return (
    <div>
        <CountContext.Provider value={count}>
            <Count setCount={setCount}/>
        </CountContext.Provider>
        
    </div>
  )
}


function Buttons({setCount}) {
    let countt = useContext(CountContext)
    return(
        <div>
            <button onClick={()=>setCount(countt + 1)}>Inc</button>
            <button onClick={()=>setCount(countt<=0? countt: countt - 1)}>Dec</button>
        </div>
    )
}



function Count({setCount}) {
    let countt = useContext(CountContext)
    return(
        <div>
            <h1>Count: {countt}</h1> 
            <Buttons setCount={setCount}/>
        </div>
    )
}

export default Sam