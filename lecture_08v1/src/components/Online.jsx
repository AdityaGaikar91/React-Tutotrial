import React, { useEffect, useState } from 'react'

function Online() {

    const[user, setUser] = useState([]);
    const[showHighlight, setShowHighlight] = useState(false);
    

    useEffect(()=>{
        async function call(){
            let resp = await fakeFetch('https://example.com/api/users/status')
            // console.log(resp.data.users);
            setUser(resp.data.users);
        }
        call()
    },[])
    
  return (
    <div>
        <h1>Online and offline</h1>
        <button onClick={() => setShowHighlight(!showHighlight)}>
          {showHighlight ? 'Disable Colors' : 'Enable Colors'}
        </button>
        {
            user.map((item,index) => {return(

                <div style={{border:"1px solid black", color: showHighlight ? (item.status === 'Online'? 'green': 'red') : 'inherit'}} key={index}>
                    <h1>Name: {item.name}</h1>
                    <h1>Status: {item.status}</h1>
                </div>

                

            )})
        }
    </div>
  )
}

export default Online

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users/status') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            users: [
              { name: 'Raju', status: 'Online' },
              { name: 'Pankaj', status: 'Offline' },
              { name: 'Sakshi', status: 'Offline' },
              { name: 'Kishore', status: 'Offline' },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'No users Found',
        })
      }
    }, 2000)
  })
}