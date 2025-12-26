import React from 'react'

function Cartoon({ cartoons }) {
  return (
    <div>
      
      {
        // cartoons.filter((item) => {return item.magnitude > 5 ? true: false})
        cartoons.filter(item => item.magnitude > 5 ? true: false).map((item) => { return(
          <div style={{border:"1px solid black"}}>
            <h1>Name: {item.name}</h1>
            <h1>magnitude: {item.magnitude}</h1>
          </div>
        )})
      }
        
    </div>
  )
}

export default Cartoon



      // {
      //   cartoons.
      // }