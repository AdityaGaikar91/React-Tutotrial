import React, { useState } from 'react'

export default function Person() {

  const [count, setcount] = useState(0)
  return (
    <div>
        <h1>Person</h1>
        <h2>Count: {count}</h2>

        <button onClick={setcount(count + 1 , count + 1, count + 1)}></button>
        <button onClick={setcount(count - 1 , count - 1, count - 1)}></button>

        but
    </div>
  )
}
