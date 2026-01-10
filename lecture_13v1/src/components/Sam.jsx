import React, { useState } from 'react'

function Sam() {
    const[count, setCount] = useState(0)
  return (
    <div>
        <Count count={count}/>
        <Button count={count} setCount={setCount}/>
    </div>
  )
}


function Button({count, setCount}) {
    return(
        <div>
            <button onClick={()=>setCount(count + 1)}>Inc</button>
            <button onClick={()=>setCount(count<=0? count: count - 1)}>Dec</button>
        </div>
    )
}



function Count({count}) {
    return(
        <div>
            <h1>Count: {count}</h1> 
        </div>
    )
}

export default Sam