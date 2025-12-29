import React, { useEffect, useState } from 'react'

function Product() {

  const[product, setProduct] = useState([]);
  const[loading, setLoading] = useState(true);
  const[err, setErr] = useState(false)

  useEffect(() => {
    async function calling() {
      
      try{
        let resp = await fakeFetch('https://example.com/api/users/d')
      console.log(resp.data);
      setProduct(resp.data)
      setLoading(false)
      }catch{
        setErr(true)
        setLoading(false)
        
      }
      
    }
    calling();
  }, [])

  if(loading){
    return <h1>Loading....</h1>
  }
  if(err){
    return <h1>Err....</h1>
  }
  return (
    <div>
      {
        product.map((item, index) => {
          return(
            <div key={index}>
              <img width={"70px"} height={"100px"} src={item.image} alt="img" />
              <h1>Name: {item.name}</h1>
              <h1>Likes: {item.likes}</h1>
              <h1>Comments: {item.comments}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default Product




export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            {
              name: 'Saroj',
              image:
                'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 500,
              comments: 10,
            },
            {
              name: 'Meeta',
              image:
                'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 200,
              comments: 1,
            },
            {
              name: 'Alia',
              image:
                'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
              likes: 100,
              comments: 5,
            },
          ],
        })
      } else {
        reject({
          status: 404,
          message: 'users data not found.',
        })
      }
    }, 2000)
  })
}