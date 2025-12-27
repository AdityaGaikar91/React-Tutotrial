import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiCall() {
  const [apiCall, setApiCall] = useState([]);

  useEffect(function () {

    // axios with promise
    function calling() {
        const API = "https://jsonplaceholder.typicode.com/todos"
        axios.get(API)
        .then((data) => setApiCall(data.data))
        .catch((err) => console.log("Error: ", err))
    }
    calling()



 


  }, []);

  return (
    <div>
      <h1>Calling API</h1>
      {apiCall.map((item) => {
        return (
          <div style={{border:"1px solid black"}} >
            <h1>Id: {item.id}</h1>
            <h1>Title: {item.title}</h1>
            <h1>Completed: {JSON.stringify(item.completed)}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default ApiCall;


// --------------------fetch with async await-------------------------------

    // async function calling() {
    //     const API = "https://jsonplaceholder.typicode.com/todos"
    //     let resp = await fetch(API);
    //     let finalData =  await resp.json();

    //     setApiCall(finalData);
    // }

    // calling()




// ------------------ fetch with promise ----------------------------------
    //     function calling() {
    //   const API = "https://jsonplaceholder.typicode.com/todos";
    //   fetch(API) //returns me promise
    //     .then(function (resp) {
    //       return resp.json();
    //     })
    //     .then((data) => {setApiCall(data)})
    //     .catch((err) => {
    //       console.log("error: ", err);
    //     });
    // }
    // calling();







// function ApiCall() {
//     const [apiData, setApiData] = useState([]);

//     useEffect(function() {
//         async function calling(){
//             const API = 'https://jsonplaceholder.typicode.com/todos';

//             await fetch(API)
//             .then(function(resp) {
//                 return resp.json()
//             })
//             .then(function(data){setApiData(data)})
//             .catch(function(err){console.log(err, "error")})
//         }
//         calling();
//     }, [])

//   return (
//     <div>
//         {
//             apiData.map(item => {
//                 return(
//                     <div>
//                         <h1>ID: {item.id}</h1>
//                         <h1>Title: {item.title}</h1>
//                         <h1>Completed: {JSON.stringify(item.completed)}</h1>

//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }
