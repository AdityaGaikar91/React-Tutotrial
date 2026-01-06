import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'

function Body() {

    let restArr = ApiCalling();
    console.log(restArr)

    const[allRestArr, setAllRestArr] = useState(restArr)

    useEffect(() => {
      if(restArr && restArr.length){
        setAllRestArr(restArr)
      }
    }, [restArr])

    function filterTopRatedRest(restArr) {
      let ratingFilteredArr = restArr.filter(rest => rest.info.avgRating > 4.3)
      setAllRestArr(ratingFilteredArr)
    }

    function resetFilter(restArr) {
      setAllRestArr(restArr)
    }
  return (
    <div>
        <h1 className='font-bold text-xl m-8'>Top restaurant chains in Mumbai</h1>
        <div className='mb-8'>
            <button onClick={() => filterTopRatedRest(restArr)} className='border rounded w-1/12 mx-12'>Rating 4.5+</button>
            <button onClick={() => resetFilter(restArr)} className='border rounded w-1/12 ml-18'>Reset</button>
        </div>
        

        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard restArr={allRestArr}/>
        </div>

    </div>
  )
}

export default Body