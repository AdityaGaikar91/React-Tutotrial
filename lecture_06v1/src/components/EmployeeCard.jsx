import React from 'react'

function EmployeeCard({name, desi, workExp}) {
  return (
    <div>
        <h1 >Name: {name}</h1>
        <h1 style={{color: "green", backgroundColor:"yellow"}}>Desi: {desi}</h1>
        <h1 style={{color: "blue", fontSize:"50px"}}>Work Exp: {workExp}</h1>
    </div>
  )
}

export default EmployeeCard 