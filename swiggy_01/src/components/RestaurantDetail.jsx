import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RestaurantDetail() {
  let {id} = useParams()

  const[foodItemDetails, setFoodItemDetails] = useState([])

  useEffect(() => {
    const API = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.203542061790174&lng=73.09340223670006&restaurantId=${id}&submitAction=ENTER`
    async function calling() {
      let resp = await axios.get(API)
      console.log(resp.data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
      setFoodItemDetails(resp.data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    }
    calling()
  }, [id])

  return (
    <div>
      {
        foodItemDetails.map(foodItem => {return(
          <div className='flex w-3/4 mx-auto mb-10 border-b-4 p-4'>
            <div className='flex flex-col w-3/4'>
              <h1>{foodItem.card.info.name}</h1>
              <h1>₹{foodItem.card.info.defaultPrice/100}/-</h1>
              <h1>{foodItem.card.info.category}</h1>
            </div>
            <img className='w-52 h-44 rounded-md border shadow-lg border-gray-100' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${foodItem.card.info.imageId}`} alt="" />

            <button className='border bg-green-300 h-8 relative top-16 right-5'>Add+</button>
          </div>
        )})
      }
    </div>
  )
}

export default RestaurantDetail