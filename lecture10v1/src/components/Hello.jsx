import React, { memo, useCallback, useState } from 'react'

function Hello() {

    let user = useCallback(function() {
        console.log("Function is called");
    }, [])
    
    const[count, setCount] = useState(0);
  return (
    <div>
        <Chotu username={user} />
        <button onClick={()=> setCount(count + 1)}>Click me to change Name</button>
        
    </div>
  )
}

const Chotu = memo(
    function({username}) {
    return (
        <div>
            <h1>Name: {username}</h1>
        </div>
    )
}
)


export default Hello