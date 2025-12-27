import React from "react"

function Bouquet({bouquet}) {
  return (
    <div>
        {
            bouquet.filter(item => item.price>2000 ? true:false).map(item=>{return(
                <div>
                    {item.flowers.map(item=> item)}
                </div>
                
            )})
        }
    </div>
  )
}

export default Bouquet