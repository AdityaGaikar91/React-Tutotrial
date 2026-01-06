import React, { memo, useState } from 'react'

function Memoo() {

  const[username, setUsername] = useState('Aditya')

  function changeNam() {
    setUsername( Math.floor(Math.random()*10))
  }

  return (
    <div>
      <Chotu nam={username}/>
      <button onClick={changeNam}>nam badal dunga</button>
      <Chotu nam="Atharva"/>
      <Chotu nam="Vaishnavi"/>
      <Chotu nam="Sam"/>
    </div>
  )
}

const Chotu = memo(
  function({nam}) {
  return (
    <div>
        <h1>Hello: {nam}</h1>
    </div>
  )
}
)







export default Memoo