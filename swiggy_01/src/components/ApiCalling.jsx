import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ApiCalling() {

    const[allRestaurantArr, setAllRestaurantArr] = useState([])

    useEffect(() => {
        const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2041161&lng=73.0943887&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        async function calling() {
            let resp = await axios.get(API)
            // console.log(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants, "resp")
            setAllRestaurantArr(resp?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        calling()
        
    }, [])

  return allRestaurantArr;
}

export default ApiCalling