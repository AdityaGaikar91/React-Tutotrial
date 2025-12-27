import React, { useEffect, useState } from 'react'

function Effect() {

  const[count, setCount] = useState(0)
  console.log("I am Component");
  

  useEffect(() => {
    console.log("I am useEffect");
  }, [count])

  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>Count: {count}</h1>
    </div>
  )
}

export default Effect