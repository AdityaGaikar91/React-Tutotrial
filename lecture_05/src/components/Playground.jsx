import React from 'react'

function Playground() {
  const[count, setCount] = React.useState(0);

  function handleCount() {
    setCount((a) => a + 1);
    setCount((b) => b + 1);
    setCount(() => count+1);
  }


  return (
    <div>
      <h1 onClick={handleCount}>Count: {count}</h1>
    </div>
  )
}

export default Playground