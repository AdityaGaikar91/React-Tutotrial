import React, { useEffect, useState } from 'react'

function Products() {

    const[product, setProduct] = useState([])

    useEffect(()=>{
        
        async function calling() {
           let resp = await fakeFetch('https://example.com/api/products')
           console.log(resp)
           setProduct(resp.data.products)
           
        }
        calling();
    },[])
    

  return (
    <div>
        {
            product.map((pro) => {
                return(
                    <div>
                        <h1>{pro.name}</h1>
                        <p>Price: {pro.price}</p>
                        <p>Quantity: {pro.quantity}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products

/**
Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.

a. Add a button, on click of which it displays only the items with more than 20 as quantity. */

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/products') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              { name: 'Color Pencils', price: 50, quantity: 40 },
              { name: 'Sketchpens', price: 110, quantity: 20 },
              { name: 'Erasor', price: 20, quantity: 20 },
              { name: 'Sharpner', price: 22, quantity: 30 },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Items list not found.',
        })
      }
    }, 2000)
  })
}