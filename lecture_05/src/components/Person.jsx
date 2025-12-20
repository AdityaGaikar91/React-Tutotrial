import { useState } from "react";

function Person({naam}) {

    const[username, setUsername] = useState(naam)

    function handleNaam() {
        setUsername("Anonymous")
    }

    return (
        <div>
            <h2>Name: {username}</h2>
            <button onClick={handleNaam}>Naam badal dunga</button>
        </div>
    )
}

export default Person;













// ------------------------------------------------------------------------------------------------------------

// function Person({naam}) {

//     let username = naam;
//     function handleNaam() {
//         console.log(username, "before");
//         username = "Anonymous"
//         console.log(username, "after")
//     }

//     return (
//         <div>
//             <h2>Name: {username}</h2>
//             <button onClick={handleNaam}>Naam badal dunga</button>
//         </div>
//     )
// }

// export default Person;