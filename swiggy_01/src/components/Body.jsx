import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'
import Search from './Search';

function Body() {

    let restArr = ApiCalling();
    console.log(restArr)

    const[allRestArr, setAllRestArr] = useState(restArr)
    const[isClicked, setIsClicked] = useState(false)
    const[isClicked2, setIsClicked2] = useState(false)

    useEffect(() => {
      if(restArr && restArr.length){
        setAllRestArr(restArr)
      }
    }, [restArr])

    function filterTopRatedRest(restArr) {
      let ratingFilteredArr = restArr.filter(rest => rest.info.avgRating > 4.3)
      setAllRestArr(ratingFilteredArr)
      setIsClicked(true)
      setIsClicked2(false)
    }

    function resetFilter(restArr) {
      setAllRestArr(restArr)
      setIsClicked2(true)
      setIsClicked(false)
    }
  return (
    <div>
        <h1 className='font-bold text-xl m-8'>Top restaurant chains in Mumbai</h1>
        <div className='mb-8 flex' >
            <button onClick={() => filterTopRatedRest(restArr)} className={isClicked?'bg-yellow-200 border rounded w-1/12 mx-12' :'border rounded w-1/12 mx-12'}>Rating 4.5+</button>
            <button onClick={() => resetFilter(restArr)} className={isClicked2? 'bg-yellow-200 border rounded w-1/12 ml-18':'border rounded w-1/12 ml-18'}>Reset</button>
            <div className='ml-18'>
              <Search restArr={restArr} setAllRestArr={setAllRestArr}/>
            </div>
            
        </div>
        

        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard restArr={allRestArr}/>
        </div>

    </div>
  )
}

export default Body