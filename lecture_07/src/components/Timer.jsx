import React, { useEffect, useState } from 'react'

function Timer() {
    const [count, setcount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
        setcount(()=>count + 1)
    }, 1000)
    })
    
  return (
    <div>
        <h1>Count {count}</h1>
    </div>
  )
}

export default Timer