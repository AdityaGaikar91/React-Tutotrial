import React, { useEffect, useState } from 'react'

function ApiCall() {
    const [apiData, setApiData] = useState([]);

    useEffect(function() {
        async function calling(){
            const API = 'https://jsonplaceholder.typicode.com/todos';

            await fetch(API)
            .then(function(resp) {
                return resp.json()
            })
            .then(function(data){setApiData(data)})
            .catch(function(err){console.log(err, "error")})
        }
        calling();
    }, [])

  return (
    <div>
        {
            apiData.map(item => {
                return(
                    <div>
                        <h1>ID: {item.id}</h1>
                        <h1>Title: {item.title}</h1>
                        <h1>Completed: {JSON.stringify(item.completed)}</h1>

                    </div>
                )
            })
        }
    </div>
  )
}

export default ApiCall