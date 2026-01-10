import React from 'react'
import { useRouteError } from 'react-router-dom'

function Errorr() {

    let error =useRouteError();
    console.log(error, "err");
    

  return (
    <div>
        <h1>Opss wrong URL!!</h1>
        <h1>{error.data}</h1>
        <h1>{error.status}</h1>
        <h1>{error.statusText}</h1>
    </div>
  )
}

export default Errorr