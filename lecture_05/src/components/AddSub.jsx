import React, { useState } from 'react'

function AddSub() {



    const[count, setCount] = useState(0);

    function handleadd(){
        console.log(setCount(count+1));
    }

    function handlesub(){
        if(count==0){
            count
        }
        else{
            console.log(setCount(count-1)); 
        }
        
    }

  return (
    <div>
        <button onClick={handleadd}>+</button>
        <h1>Count: {count}</h1>
        <button onClick={handlesub}>-</button>
    </div>
  )
}

export default AddSub