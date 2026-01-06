import React, { useEffect, useRef } from 'react'

function Salary() {
    let salary = 400000;
    let spanEl = useRef();

    useEffect(() => {
        setTimeout(() => {
            spanEl.current.innerText = 20000
        }, 3000)
    }, [])

    
  return (
    <div>
        <h1>Salary: <span ref={spanEl}>{salary}</span> </h1>
    </div>
  )
}

export default Salary