import { memo, useState } from "react"

function Memoo(){
    const [username, setUsername] = useState("Aditya")
    function changeNaam(){
        setUsername(Math.floor(Math.random()*10))
    }
    return(
        <div>
            <Chotu naam={username}/>
            <button onClick={changeNaam}>Naam badal dunga</button>
            <Chotu naam="Joy"/>
            <Chotu naam="Rahul"/>
            <Chotu naam="Ramu"/>
        </div>
    )
}

const Chotu = memo(function({naam}){
    return(
        <div>
            <h1>Hello: {naam}</h1>
        </div>
    )
})

export default Memoo



