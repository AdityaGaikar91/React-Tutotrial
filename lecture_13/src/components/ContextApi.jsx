import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

function ContextApi() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <CountContext.Provider value={count}>
            <Count setCount={setCount}/>
        </CountContext.Provider>
    </div>
  )
}

export default ContextApi



function Buttons({setCount}) {
    let countt = useContext(CountContext)
  return (
    <div>
        <button onClick={()=>setCount(countt+1)}>Inc</button>
        <button onClick={()=>setCount(countt-1)}>Inc</button>
    </div>
  )
}



function Count({setCount}) {
  return (
    <div>
        <CountRender/>
    </div>
  )
}

