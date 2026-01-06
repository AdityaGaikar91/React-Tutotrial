import React, { useRef, useState } from 'react'

function Refe() {

    const[count, setCount] = useState(0);
    
    const countRef = useRef(0)

    function handleRef() {
        countRef.current++;
        
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Count</button>

        <hr />

        <h1>RefCount: {countRef.current}</h1>
        <button onClick={handleRef}>RefCount</button>
    </div>
  )
}


export default Refe